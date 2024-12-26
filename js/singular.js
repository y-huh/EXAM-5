let studentData;

document.addEventListener('DOMContentLoaded', function() {
    try {
        studentData = JSON.parse(localStorage.getItem('studentData')) || {
            name: 'Karthi',
            email: 'karthi@gmmail.com',
            phone: '7305477760',
            dateAdmission: '08-Dec, 2021',
        };
        localStorage.setItem('studentData', JSON.stringify(studentData));
    } catch (error) {
        console.error('Error loading student data:', error);
    }

    renderStudentProfile();
});

// Render Student Profile function
function renderStudentProfile() {
    const profileContainer = document.getElementById('studentProfile');
    
    profileContainer.innerHTML = `
        

        <div class="flex gap-8">
            <div class="relative">
                <div class="w-[200px] h-[200px] rounded-lg overflow-hidden border-4 border-purple-200">
                    <img
                        src="./images/indianguy.png"
                        alt="${studentData.name}"
                        class="w-full h-full object-cover"
                    >
                </div>
            </div>

            <div class="space-y-4">
                <div>
                    <label class="text-sm text-gray-500">Name</label>
                    <p class="font-medium">${studentData.name}</p>
                </div>

                <div>
                    <label class="text-sm text-gray-500">Email</label>
                    <p class="font-medium">${studentData.email}</p>
                </div>

                <div>
                    <label class="text-sm text-gray-500">Phone</label>
                    <p class="font-medium">${studentData.phone}</p>
                </div>

                <div>
                    <label class="text-sm text-gray-500">Date Admission</label>
                    <p class="font-medium">${studentData.dateAdmission}</p>
                </div>
            </div>
        </div>
    `;

    document.querySelector('.student-name').textContent = studentData.name;
}