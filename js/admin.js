// Variable declarations
let elStudentTable, elModalWrapper, elModalInner, studentsList;

// DOM Content Loaded Event Listener
document.addEventListener('DOMContentLoaded', function() {
  // Initialize variables
  elStudentTable = document.querySelector(".product-table");
  elModalWrapper = document.querySelector("#wrapper");
  elModalInner = document.querySelector(".modal-inner");
  const addStudentBtn = document.querySelector(".login-btn");
  

  // Initialize studentsList
  try {
    studentsList = JSON.parse(localStorage.getItem("students")) || [];
  } catch (error) {
    console.error("Error initializing studentsList:", error);
    studentsList = [];
  }

  // Render initial students
  renderStudents(studentsList, elStudentTable);

  // Add event listeners
  addStudentBtn.addEventListener("click", handleAddBtnClick);

  // Modal Close
  elModalWrapper.addEventListener("click", (e) => {
    if (e.target.id === "wrapper") {
      elModalWrapper.classList.add("scale-0");
    }
  });
});

// Render Students function
function renderStudents(arr, list) {
  list.innerHTML = "";
  arr.forEach(student => {
    let elTR = document.createElement("tr");
    elTR.innerHTML = `
      <td class="py-4 px-6">
        <div class="flex items-center">
          <img class="w-10 h-10 rounded-full mr-3" src="./images/indianguy.png" alt="Profile">
          <span>${student.name}</span>
        </div>
      </td>
      <td class="py-4 text-[14px] leading-[18px] px-6">${student.email}</td>
      <td class="py-4 text-[14px] leading-[18px] px-6">${student.phone}</td>
      <td class="py-4 text-[14px] leading-[18px] px-6">${student.enrollNumber}</td>
      <td class="py-4 text-[14px] leading-[18px] px-6">${student.dateAdmission}</td>
      <td class="py-4 text-[14px] leading-[18px] px-6">
        <div class="flex items-center justify-end gap-4">
          <button onclick="handleEditBtnClick(${student.id})">
            <img src="./images/span2.svg" alt="Edit Icon" width="22" height="22">
          </button>
          <button onclick="handleDeleteStudent(${student.id})">
            <img src="./images/span3.svg" alt="Delete Icon" width="22" height="22">
          </button>
          <a href="./singular.html">
            <img src="./images/span.svg" alt="Delete Icon" width="22" height="22">
          </a>
        </div>
      </td>
    `;
    list.appendChild(elTR);
  });
}

// Add Student function
function handleAddBtnClick() {
  elModalWrapper.classList.remove("scale-0");
  elModalInner.innerHTML = `
    <form class="add-form w-[915px] mx-auto">
      <div class="flex justify-between">
        <div class="w-[49%] flex flex-col space-y-[20px]">
          <label>
            <span class="text-[23px] text-[#898989] pl-2 mb-1">Name</span>
            <input name="name" class="w-full py-[15px] pl-[10px] text-[25px] rounded-[5px] bg-slate-200" placeholder="Student Name" />
          </label>
          <label>
            <span class="text-[23px] text-[#898989] pl-2 mb-1">Email</span>
            <input name="email" type="email" class="w-full py-[15px] pl-[10px] text-[25px] rounded-[5px] bg-slate-200" placeholder="Email" />
          </label>
          <label>
            <span class="text-[23px] text-[#898989] pl-2 mb-1">Phone</span>
            <input name="phone" class="w-full py-[15px] pl-[10px] text-[25px] rounded-[5px] bg-slate-200" placeholder="Phone" />
          </label>
        </div>
        <div class="w-[49%] flex flex-col space-y-[20px]">
          <label>
            <span class="text-[23px] text-[#898989] pl-2 mb-1">Enroll Number</span>
            <input name="enrollNumber" class="w-full py-[15px] pl-[10px] text-[25px] rounded-[5px] bg-slate-200" placeholder="Enroll Number" />
          </label>
          <label>
            <span class="text-[23px] text-[#898989] pl-2 mb-1">Date Admission</span>
            <input name="dateAdmission" class="w-full py-[15px] pl-[10px] text-[25px] rounded-[5px] bg-slate-200" placeholder="Date Admission" />
          </label>
        </div>
      </div>
      <button class="add-btn-submit py-[10px] w-[237px] block mx-auto mt-[33px] bg-[#FEAF00] text-white font-bold text-[20px] text-center rounded-[35px]" type="submit">Add Student</button>
    </form>
  `;

  let elAddForm = document.querySelector(".add-form");
  let elBtnSubmit = document.querySelector(".add-btn-submit");

  elAddForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const data = {
      id: studentsList.length ? studentsList[studentsList.length - 1].id + 1 : 1,
      name: e.target.name.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
      enrollNumber: e.target.enrollNumber.value,
      dateAdmission: e.target.dateAdmission.value,
      image: "/placeholder.svg?height=40&width=40"
    };

    elBtnSubmit.innerHTML = `<img class="scale-[1.5] mx-auto" src="./images/loading.png" alt="Loading..." width="38" height="37">`;
    setTimeout(() => {
      elBtnSubmit.innerHTML = "Add Student";
      studentsList.push(data);
      try {
        localStorage.setItem("students", JSON.stringify(studentsList));
      } catch (error) {
        console.error("Error saving to localStorage:", error);
      }
      renderStudents(studentsList, elStudentTable);
      elModalWrapper.classList.add("scale-0");
    }, 1000);
  });
}

// Edit Student function
function handleEditBtnClick(id) {
  elModalWrapper.classList.remove("scale-0");
  let editStudent = studentsList.find(item => item.id == id);
  
  elModalInner.innerHTML = `
    <form class="edit-form w-[915px] mx-auto">
      <div class="flex justify-between">
        <div class="w-[49%] flex flex-col space-y-[20px]">
          <label>
            <span class="text-[23px] text-[#898989] pl-2 mb-1">Name</span>
            <input value="${editStudent.name}" name="name" class="w-full py-[15px] pl-[10px] text-[25px] rounded-[5px] bg-slate-200" placeholder="Student Name"/>
          </label>
          <label>
            <span class="text-[23px] text-[#898989] pl-2 mb-1">Email</span>
            <input value="${editStudent.email}" name="email" type="email" class="w-full py-[15px] pl-[10px] text-[25px] rounded-[5px] bg-slate-200" placeholder="Email"/>
          </label>
          <label>
            <span class="text-[23px] text-[#898989] pl-2 mb-1">Phone</span>
            <input value="${editStudent.phone}" name="phone" class="w-full py-[15px] pl-[10px] text-[25px] rounded-[5px] bg-slate-200" placeholder="Phone"/>
          </label>
        </div>
        <div class="w-[49%] flex flex-col space-y-[20px]">
          <label>
            <span class="text-[23px] text-[#898989] pl-2 mb-1">Enroll Number</span>
            <input value="${editStudent.enrollNumber}" name="enrollNumber" class="w-full py-[15px] pl-[10px] text-[25px] rounded-[5px] bg-slate-200" placeholder="Enroll Number"/>
          </label>
          <label>
            <span class="text-[23px] text-[#898989] pl-2 mb-1">Date Admission</span>
            <input value="${editStudent.dateAdmission}" name="dateAdmission" class="w-full py-[15px] pl-[10px] text-[25px] rounded-[5px] bg-slate-200" placeholder="Date Admission"/>
          </label>
        </div>
      </div>
      <button class="edit-btn-submit py-[10px] w-[237px] block mx-auto mt-[33px] bg-[#FEAF00] text-white font-bold text-[20px] text-center rounded-[35px]" type="submit">Update Student</button>
    </form>
  `;

  let elEditForm = document.querySelector(".edit-form");
  elEditForm.addEventListener("submit", function (e) {
    e.preventDefault();

    editStudent.name = e.target.name.value;
    editStudent.email = e.target.email.value;
    editStudent.phone = e.target.phone.value;
    editStudent.enrollNumber = e.target.enrollNumber.value;
    editStudent.dateAdmission = e.target.dateAdmission.value;

    let elEditBtn = document.querySelector(".edit-btn-submit");
    elEditBtn.innerHTML = `<img class="scale-[1.5] mx-auto" src="./images/loading.png" alt="Loading..." width="38" height="37"/>`;

    setTimeout(() => {
      elEditBtn.innerHTML = `Update Student`;
      elModalWrapper.classList.add("scale-0");
      renderStudents(studentsList, elStudentTable);
      try {
        localStorage.setItem("students", JSON.stringify(studentsList));
      } catch (error) {
        console.error("Error saving to localStorage:", error);
      }
    }, 1000);
  });
}

// Delete Student function
function handleDeleteStudent(id) {
  if (confirm("Are you sure you want to delete this student?")) {
    const deleteIndex = studentsList.findIndex(item => item.id == id);
    studentsList.splice(deleteIndex, 1);
    renderStudents(studentsList, elStudentTable);
    try {
      localStorage.setItem("students", JSON.stringify(studentsList));
    } catch (error) {
      console.error("Error saving to localStorage:", error);
    }
  }
}