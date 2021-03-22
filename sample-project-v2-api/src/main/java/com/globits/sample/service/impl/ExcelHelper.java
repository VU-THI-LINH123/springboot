package com.globits.sample.service.impl;
import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.util.List;

import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;

import com.globits.sample.dto.EmployeeDTO;

public class ExcelHelper {
  public static String TYPE = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";
  static String[] HEADERs = { "Idvulinh", "Title", "Description", "Published" };
  static String SHEET = "Tutorials";

  public static ByteArrayInputStream tutorialsToExcel(List<EmployeeDTO> tutorials) {

    try (Workbook workbook = new XSSFWorkbook(); ByteArrayOutputStream out = new ByteArrayOutputStream();) {
      Sheet sheet = workbook.createSheet(SHEET);

      // Header
      Row headerRow = sheet.createRow(0);

      for (int col = 0; col < HEADERs.length; col++) {
        Cell cell = headerRow.createCell(col);
        cell.setCellValue(HEADERs[col]);
      }

      int rowIdx = 1;
      for (EmployeeDTO tutorial : tutorials) {
        Row row = sheet.createRow(rowIdx++);

     
        row.createCell(1).setCellValue(tutorial.getAge());
        row.createCell(2).setCellValue(tutorial.getCode());
        row.createCell(3).setCellValue(tutorial.getName());
        row.createCell(4).setCellValue(tutorial.getEmail());
        row.createCell(5).setCellValue(tutorial.getPhone());
      }

      workbook.write(out);
      return new ByteArrayInputStream(out.toByteArray());
    } catch (IOException e) {
      throw new RuntimeException("fail to import data to Excel file: " + e.getMessage());
    }
  }
}