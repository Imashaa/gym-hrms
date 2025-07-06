package com.gym.hrms.controller;

import com.gym.hrms.model.Employee;
import com.gym.hrms.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/employees")
@CrossOrigin(origins = "http://localhost:5173")  
public class EmployeeController {

    @Autowired
    private EmployeeRepository employeeRepo;

    @GetMapping
    public List<Employee> getAllEmployees() {
        return employeeRepo.findAll();
    }

    @PostMapping
    public Employee addEmployee(@RequestBody Employee employee) {
        return employeeRepo.save(employee);
    }

    @PutMapping("/{id}")
    public Employee updateEmployee(@PathVariable Long id, @RequestBody Employee employee) {
        employee.setId(id);
        return employeeRepo.save(employee);
    }

    @DeleteMapping("/{id}")
    public void deleteEmployee(@PathVariable Long id) {
        employeeRepo.deleteById(id);
    }
}
