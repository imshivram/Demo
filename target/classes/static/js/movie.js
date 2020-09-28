var movies = (function() {
	return { 
		
defaultCategories:["Action","Thriller","Comedy","Romance"],		
		
addMovie:function()
{
	var categories=[];
	var checkedDivs=$('#addNewMovie_checkboxes').find('input:checked')
	for(var i=0;i<checkedDivs.length;i++)
	{
		var dataJ=checkedDivs[i];
		if(dataJ.id){
			categories.push(dataJ.id.replace("_add", ""));	
		}
		
	}
	var releaseDate=$('#release_dae').val();
	var name=$('#addNewMovie').val();
	
	if(!name)
	{
		alert("Please choose a name for movie to add");
		return;
	}
	
	if(!categories.length)
	{
		alert("Please choose a category");
		return;
	}
	
	if(!releaseDate)
	{
		alert("Please choose a release date");
		return;
	}
	var data={};
	data.name=name;
	data.release_date=releaseDate;
	data['categories']=categories;
	var jsonData=[data];
	
	$.ajax({
        type: "POST",
        url: "/v1/movies",
        headers: {
            'Content-Type':'application/json',
        },
        dataType: 'json',
        data:JSON.stringify(jsonData),
        success: function(response,status,code) {
            if(code && (code.status==200 || code.status==201)){
            	alert("Movie added succesfully..")
            	movies().renderMovies();
            }else{
            	alert("wrong values given try again")
            }
        },
        error: function(response,status,code)
        {
        	if(response && response.status==409)
        	{
        		alert("Already the same movie name exists.Please try with other name");
        	}else
        		{
        			alert("error occured: try again");
        		}
        }
});
},
		
fetchMovies:function(name,category,fromdate,todate)
{
	return new Promise(function(resolve, reject) {
        	var requrl="v1/movies";
        	if(name || category && category.length || (fromdate && todate))
        	{
        		requrl+="?"
        	}
        	var queryJSON={};
        	if(name)
        	{
        		queryJSON.name=name;
        	}
        	
        	if(category && category.length)
        	{
        		requrl+="categories="+category[0]+'&';
        		for(var i=1;i<category.length;i++)
        			{
        				requrl+="&categories="+category[i]+'&';
        			}
        	}
        	
        	if(fromdate && todate)
        	{
        		queryJSON.from_date=fromdate;
        		queryJSON.to_date=todate;
        	}
        	
        	if(queryJSON && Object.keys(queryJSON).length>0)
        		{
        			requrl+= $.param(queryJSON);
        			//requrl=encodeURI(requrl);
        		}
            $.ajax({
                    type: "GET",
                    url: requrl,
                    success: function(response) {
                        resolve(response);
                    },
                    error: function()
                    {
                    	reject();
                    }
            });
  
      });
},

showHide:function(id)
{
	if(id=='add')
	{
		$('#add_div').show();
		$('#search_div').hide();
	}else
	{
		$('#add_div').hide();
		$('#search_div').show();
	}
},

clearSearch:function()
{
	$('#searchName').val('');
	$('#from_date').val('');
	$('#to_date').val('');
	$('#checkboxes').find('input:checked').prop('checked', false);
	movies().renderMovies();
},
searchMovies:function()
{
	var name=$('#searchName').val();
	var fromDate=$('#from_date').val();
	var toDate=$('#to_date').val();
	var categories=[];
	
	var checkedDivs=$('#checkboxes').find('input:checked')
	for(var i=0;i<checkedDivs.length;i++)
	{
		var dataJ=checkedDivs[i];
		if(dataJ.id){
			categories.push(dataJ.id.replace("_search", ""));	
		}
		
	}
	
	if(!name && (!fromDate && !toDate) && ! categories.length)
		{
		  alert("please set a critieria for search");
		  return;
		}
	
	if((fromDate && !toDate) || (toDate && !fromDate) )
	{
		  alert("Both from and to dates must be chosen for search");
		  return;
	}
	
	if(fromDate &&toDate )
	{
		if(new Date(fromDate).getDate() > new Date(toDate).getDate() )
			{
				alert("From Date should not be greated than to Date");
				return;
			}
	}
	
	
	movies().fetchMovies(name,categories,fromDate,toDate).then(function(response){
		if(!response)
		{
			$('#noMovieFound').show();
			$("#movies").hide();
			return;
		}
		movies().renderHtml(response);
	});
},

renderHtml:function(response)
{
	movies().sortMovies(response);
	$('#noMovieFound').hide();
	$("#movies").html(Handlebars.templates.movieList({ data: response }));
	$("#movies").show();
	
},
sortMovies:function(data)
{
	if(!data)
	{
		return;
	}

	data.sort(function(a,b){
		  return new Date(a.release_date) - new Date(b.release_date);
		}); 
	
	data.sort(function(a, b){
		 var nameA=a.name.toLowerCase(), nameB=b.name.toLowerCase();
		 if (nameA < nameB) 
		  return -1;
		 if (nameA > nameB)
		  return 1;
		 return 0; 
		});
	
	for(var i=0;i<data.length;i++)
	{
		var json=data[i];
		var dobArr = new Date(json.release_date).toDateString().split(' ');
		var dobFormat = dobArr[2] + ' ' + dobArr[1] + ' ' + dobArr[3];
		json.new_date=dobFormat;
	}
	
},

renderMovies:function()
{
	movies().fetchMovies().then(function(response){
		if(!response)
		{
			$('#noMovieFound').show();
			return;
		}
		movies().renderHtml(response);
	});
},

toggleCheckBox:function(id)
{
	$('#'+id).toggle();
},

loadStartupHtml:function(){
	
	$('#movieHomePage').html(Handlebars.templates.movieHome);
	
	var data={"category":movies().defaultCategories , "action":"_add"};
	$('#add_div').html(Handlebars.templates.addMovie);
	
	var templateDropDown=Handlebars.templates.dropdown;
	
	$('#addNewMovie_checkboxes').html(templateDropDown(data));
	
	$('#search_div').html(Handlebars.templates.searchMovie);
	
	data.action="_search";
	
	$('#checkboxes').html(templateDropDown(data));
}

}
});

// on load function
$(document).ready(function($) {
	
	movies().loadStartupHtml();

	movies().renderMovies();
});