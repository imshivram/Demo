//$Id$
package com.movies.model;

import javax.ws.rs.HttpMethod;
import javax.ws.rs.core.MediaType;

public class MovieLink {
	

	private String href;
	
	private String rel="self";
	
	private String method=HttpMethod.GET;
	
	private String mediaType=MediaType.APPLICATION_JSON;

	public String getMediaType() {
		return mediaType;
	}

	public void setMediaType(String mediaType) {
		this.mediaType = mediaType;
	}
	
	public String getHref() {
		return href;
	}

	public void setHref(String href) {
		this.href = href;
	}

	public String getRel() {
		return rel;
	}

	public void setRel(String rel) {
		this.rel = rel;
	}

	public String getMethod() {
		return method;
	}

	public void String(String method) {
		this.method = method;
	}
}
