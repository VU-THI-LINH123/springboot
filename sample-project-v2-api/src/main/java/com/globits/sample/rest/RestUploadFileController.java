package com.globits.sample.rest;

import java.io.IOException;

import org.springframework.http.MediaType;
import org.springframework.security.access.annotation.Secured;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.globits.core.Constants;

@RestController
@RequestMapping("/api/fileupload")
public class RestUploadFileController {
	@Secured({Constants.ROLE_ADMIN,"ROLE_STUDENT_MANAGERMENT"})
	@RequestMapping(value = "/upload",method = RequestMethod.POST, consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
	public void saveUploadFile(@RequestParam("uploadfile") MultipartFile file) throws IOException {
		byte[] bytes = file.getBytes();
		System.out.println(file.getOriginalFilename()+":"+file.getContentType()+":"+file.getSize());
	}
	
	@PreAuthorize("isAuthenticated()")
	@RequestMapping(value = "/download",method = RequestMethod.GET)
	public void getFile() {
		System.out.println("GET");
	}
}
