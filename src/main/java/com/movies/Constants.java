//$Id$
package com.movies;

import java.text.SimpleDateFormat;
import java.util.TimeZone;

public class Constants {
	public final static SimpleDateFormat commonDateFormat=new SimpleDateFormat("yyyy-MM-dd");
	
	static{
		commonDateFormat.setTimeZone(TimeZone.getTimeZone("GMT"));
	}
}
