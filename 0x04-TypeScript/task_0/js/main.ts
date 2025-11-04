/*interface student {

  firstName: string;
  lastName: string;
  age: number;
  location: string;
}
let student1: student = {
  firstName: "Solomon",
  lastName: "Tsehay",
  age: 23,
  location: "Addis Ababa",
};
let student2: student = {
  firstName: "Abebe",
  lastName: "Tsehay",
  age: 20,
  location: "Bahir Dar",
};

let studentsList: student[] = [student1, student2];
const table = document.createElement("table");
const headerRow = document.createElement("tr");
const header1 = document.createElement("th");
header1.textContent = "First Name";
const header2 = document.createElement("th");
header2.textContent = "Location";
headerRow.appendChild(header1);
headerRow.appendChild(header2);
table.appendChild(headerRow);
studentsList.forEach((student) => {
  const row = document.createElement("tr");
  const firstNameCell = document.createElement("td");
  firstNameCell.textContent = student.firstName;
  const locationCell = document.createElement("td");
  locationCell.textContent = student.location;
  row.appendChild(firstNameCell);
  row.appendChild(locationCell);
  table.appendChild(row);
});
document.body.appendChild(table);
alert("Hello, TypeScript!");
// export {};
*/

// 1. Write an interface named Student
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// 2. Create two students with explicit Student typing
const student1: Student = {
  firstName: "Jane",
  lastName: "Doe",
  age: 23,
  location: "New York",
};

const student2: Student = {
  firstName: "John",
  lastName: "Smith",
  age: 25,
  location: "California",
};

// 2. Create an array named studentsList containing the two variables
const studentsList: Student[] = [student1, student2];

// 3. Using Vanilla Javascript, render a table
// 4. For each element, append a new row containing first name and location

/**
 * Renders an HTML table of students to the body of the document.
 * @param students The array of students to render.
 */
const renderTable = (students: Student[]): void => {
  // 1. Create the table element
  const table: HTMLTableElement = document.createElement("table");

  // 2. Create the table body
  const tableBody: HTMLTableSectionElement = document.createElement("tbody");

  // Create table header (Optional, but good practice)
  const tableHead: HTMLTableSectionElement = document.createElement("thead");
  const headerRow: HTMLTableRowElement = document.createElement("tr");

  const headers: string[] = ["First Name", "Location"];
  headers.forEach((headerText: string) => {
    const th: HTMLTableCellElement = document.createElement("th");
    th.textContent = headerText;
    headerRow.appendChild(th);
  });
  tableHead.appendChild(headerRow);
  table.appendChild(tableHead);

  // 3. Loop through studentsList and create rows
  students.forEach((student: Student) => {
    // Create a new table row
    const row: HTMLTableRowElement = document.createElement("tr");

    // Create and append the first name cell
    const firstNameCell: HTMLTableCellElement = document.createElement("td");
    firstNameCell.textContent = student.firstName;
    row.appendChild(firstNameCell);

    // Create and append the location cell
    const locationCell: HTMLTableCellElement = document.createElement("td");
    locationCell.textContent = student.location;
    row.appendChild(locationCell);

    // Append the row to the table body
    tableBody.appendChild(row);
  });

  // 4. Assemble and append the table to the document body
  table.appendChild(tableBody);
  document.body.appendChild(table);
};

// Execute the rendering function
renderTable(studentsList);
