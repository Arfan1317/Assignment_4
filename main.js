 let jobsData = [
            { id: 1, company: "Mobile First Corp", position: "React Native Developer", location: "Remote", type: "Full-time", salary: "$130k - $175k", description: "Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.", status: "NOT APPLIED" },
            { id: 2, company: "WebFlow Agency", position: "Web Designer & Developer", location: "Los Angeles, CA", type: "Part-time", salary: "$80k - $120k", description: "Create stunning web experiences for high-profile clients. Must have portfolio and experience with modern web design trends.", status: "NOT APPLIED" },
            { id: 3, company: "DataViz Solutions", position: "Data Visualization Specialist", location: "Boston, MA", type: "Full-time", salary: "$125k - $165k", description: "Transform complex data into compelling visualizations. Required skills: D3.js, React, and strong analytical thinking.", status: "NOT APPLIED" },
            { id: 4, company: "CloudFirst Inc", position: "Backend Developer", location: "Seattle, WA", type: "Full-time", salary: "$140k - $190k", description: "Design and maintain scalable backend systems using Python and AWS. Work with modern DevOps practices and cloud infrastructure.", status: "NOT APPLIED" },
            { id: 5, company: "Innovation Labs", position: "UI/UX Engineer", location: "Austin, TX", type: "Full-time", salary: "$110k - $150k", description: "Create beautiful and functional user interfaces for our suite of products. Strong design skills and frontend development expertise required.", status: "NOT APPLIED" },
            { id: 6, company: "MegaCorp Solutions", position: "JavaScript Developer", location: "New York, NY", type: "Full-time", salary: "$130k - $170k", description: "Build enterprise applications with JavaScript and modern frameworks. We offer competitive compensation and professional development.", status: "NOT APPLIED" },
            { id: 7, company: "StartupXYZ", position: "Full Stack Engineer", location: "Remote", type: "Full-time", salary: "$120k - $160k", description: "Join our fast-growing startup and work on our core platform. Experience with Node.js and React required. Great equity package included.", status: "NOT APPLIED" },
            { id: 8, company: "TechCorp Industries", position: "Senior Frontend Developer", location: "San Francisco, CA", type: "Full-time", salary: "$130k - $175k", description: "We are looking for an experienced Frontend Developer to build scalable web applications using React and TypeScript.", status: "NOT APPLIED" }
        ];

        let currentTab = "All";
        
        const jobsContainer = document.getElementById('jobs-container');
        const emptyState = document.getElementById('empty-state');
        const countTotal = document.getElementById('count-total');
        const countInterview = document.getElementById('count-interview');
        const countRejected = document.getElementById('count-rejected');
        const sectionJobCount = document.getElementById('section-job-count');
        const tabButtons = document.querySelectorAll('.tab-btn');

        function renderUI() {
            let jobsToShow = [];
            if (currentTab === "All") {
                jobsToShow = jobsData; 
            } else if (currentTab === "Interview") {
                jobsToShow = jobsData.filter(job => job.status === "Interview"); 
            } else if (currentTab === "Rejected") {
                jobsToShow = jobsData.filter(job => job.status === "Rejected");
            }

            if (jobsToShow.length === 0) {
                emptyState.classList.remove('hidden');
                jobsContainer.innerHTML = "";
            } else {
                emptyState.classList.add('hidden');
                
                jobsContainer.innerHTML = jobsToShow.map(job => {
                    // Update badges to use your custom Hex codes
                    let badgeClass = "bg-slate-100 text-slate-800";
                    let badgeText = job.status;
                    
                    if (job.status === "Interview") {
                        badgeClass = "bg-[#10B981]/10 text-[#10B981]";
                    } else if (job.status === "Rejected") {
                        badgeClass = "bg-[#EF4444]/10 text-[#EF4444]";
                    }

                   
                }).join('');
            }
            updateDashboardCounts();
        }