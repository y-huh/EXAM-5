let studentData;

document.addEventListener('DOMContentLoaded', function() {
    
        studentData = JSON.parse(localStorage.getItem('studentData')) || {
            name: 'Валижон',
            email: 'kuvandikovvalizon@gmmail.com',
            phone: '+998 97 744-41-82	',
            dateAdmission: '58528741548745157+845',
        };
        

    renderStudentProfile();
});

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
                    <p class="font-medium">Валижон</p>
                </div>

                <div>
                    <label class="text-sm text-gray-500">Email</label>
                    <p class="font-medium">kuvandikovvalizon@gmail.com</p>
                </div>

                <div>
                    <label class="text-sm text-gray-500">Phone</label>
                    <p class="font-medium">+998 97 744-41-82</p>
                </div>

                <div>
                    <label class="text-sm text-gray-500">Date Admission</label>
                    <p class="font-medium">58528741548745157</p>
                </div>
            </div>
        </div>
    `;

    document.querySelector('.student-name').textContent = studentData.name;
}