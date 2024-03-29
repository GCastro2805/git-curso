Create table Employees
(
	code nvarchar(50) primary key,
	name nvarchar(50),
	gender nvarchar(50),
	annualSalary decimal(18,3),
	dateOfBirth nvarchar(50)
)

select * from Employees

Insert into Employees values ('emp101', 'Tom', 'Male', 5500, '6/25/1998')

Insert into Employees values ('emp102', 'Alex', 'Male', 5700.95, '9/6/1992')
Insert into Employees values ('emp103', 'Mike', 'Male', 5900, '12/8/1979')
Insert into Employees values ('emp104', 'Mary', 'Female', 6500.826, '10/14/1980')
Insert into Employees values ('emp105', 'Nancy', 'Female', 6700.826, '12/15/1982')
Insert into Employees values ('emp106', 'Steve', 'Male', 7700.481, '11/18/1979')