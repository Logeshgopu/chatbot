function getBotResponse(input) {
    //how its going
        if (input == "good") {
            alert("To known about bot type: help");
            return "Hey thats cool.<br> How can i help you?";
        } else if (input == "nice") {
            alert("To known about bot type: help");
            return "Hey thats cool.<br> How can i help you?";   
        } else if (input == "boring") {
            return "its ok. Try to learn somthing new when your bored.<br> How can i help you?";
        } else if (input == "fine") {
            return "Hey thats cool.<br> How can i help you?";
        }else if (input == "tell me about you") {
            return "sure,Iam chat bot and i was developed by Achariya college students,<br>Mr.G.Logesh<br>Mr.M.Mohamad Riyas<br>Mr.M.Sivasuriya<br>Mr.D.Kumaresan<br>Under the Guide of<br>Mrs.S.Kalaitchelvi,AP/CSE";
        }else if (input == "what is your name") {
            return "Iam chat bot and i was developed by Achariya college students,<br>Mr.G.Logesh<br>Mr.M.Mohamad Riyas<br>Mr.M.Sivasuriya<br>Mr.D.Kumaresan <br>Special thanks to Mr.A.Ebinesar<br>Under the Guide of<br>Mrs.S.Kalaitchelvi,AP/CSE";
        }else if (input == "about you") {
            return "sure,Iam chat bot and i was developed by Achariya college students,<br>Mr.G.Logesh<br>Mr.M.Mohamad Riyas<br>Mr.M.Sivasuriya<br>Mr.D.Kumaresan<br>Under the Guide of<br>Mrs.S.Kalaitchelvi,AP/CSE";
        }else if (input == "name") {
            return "Iam chat bot and i was developed by Achariya college students,<br>Mr.G.Logesh<br>Mr.M.Mohamad Riyas<br>Mr.M.Sivasuriya<br>Mr.D.Kumaresan<br>Under the Guide of<br>Mrs.S.Kalaitchelvi,AP/CSE";
        }
    
        //how to use
        //commmunication skill developement
        if (input == "help") {
            return "Hii,I hope that you are good.<br>Iam chat bot i can improve your knowedge and skills that will help you to shine in future.<br>You can use me for:<br>1.Communication skill development<br>2.Interview Question & Answer<br>3.Resume Preperation<br>4.Entertainment<br> select one number for chat we me" ;
        }else if (input == "how to use") {
            return "Hii,I hope that you are good.<br>Iam chat bot i can improve your knowedge and skills that will help you to shine in future.<br>You can use me for:<br>1.Communication skill development<br>2.Interview Question & Answer<br>3.Resume Preperation<br>4.Entertainment<br> select one number for chat we me" ;
        }else if (input == "next") {
            return "Hii,I hope that you are good.<br>Iam chat bot i can improve your knowedge and skills that will help you to shine in future.<br>You can use me for:<br>1.Communication skill development<br>2.Interview Question & Answer<br>3.Resume Preperation<br>4.Entertainment<br> select one number for chat we me" ;
        }
        else if (input == "1") {
            return "your selected 1 that is communication skill development<br>Its ok i will ask some questions to you pls answer it that will improve your communication<br>Are you ready! To start conversation type ready";
        } else if (input == "ready") {
            return "Thats good.imagine that your going to interview for a company located  in Bengaluru for that your asking address to them<br>Type your answer...<br>Note: To know correct answer type con1";
        }else if (input == "con1") {
            return "Your Ans: Good morning! I have an interview scheduled for [10.00 to 11.00] today, and I wanted to confirm the address of your company.<br>Type this to continue conversation...";
        }else if (input == "Good morning! I have an interview scheduled for [10.00 to 11.00] today, and I wanted to confirm the address of your company.") {
            return "Good morning! Sure, our company is located at [street name], in [building name], which is in [area name], in Bengaluru.<br>Type your answer...<br>Note: To know next conversation type con2";
        }else if (input == "con2") {
            return "Your Ans: Thank you very much! Could you tell me a little bit about the building or any landmarks I should look out for?<br>Type this to continue conversation...";
        }else if (input == "Thank you very much! Could you tell me a little bit about the building or any landmarks I should look out for?") {
            return " Yes, our building is located next to the [landmark], which is a well-known [description of the landmark]. The building is [description of the building] and has a sign with our company name on it outside.<br>Type your answer...<br>Note: To know next conversation type con3";
        }else if (input == "con3") {
            return "Your Ans: Okay, great. And how would you suggest I get to your office? Is there any public transportation available?<br>Type this to continue conversation...";
        }else if (input == "Okay, great. And how would you suggest I get to your office? Is there any public transportation available?") {
            return " Yes, there are several buses that stop near our building, and there's also a metro station nearby. If you're driving, there's a parking lot next to the building where you can park your vehicle.<br>Note: To know next conversation type con4";
        }else if (input == "con4") {
            return " Your Ans: Thank you for the information. I look forward to meeting with the hiring team later today.<br>Type this to continue conversation...";
        }else if (input == "Thank you for the information. I look forward to meeting with the hiring team later today.") {
            return " You're welcome! Good luck with your interview.<br><br>Your successfully completed the conversation.<br>I hope that your learned something.<br>Your happy-Type(yes/no)";
        }else if (input == "yes") {
            return "Hey thats cool<br>Practice daily to improve your self.<br><br>NEVER STOP LEARNING...<br>NEVER STOP GROWING..";
        }else if (input == "no") {
            return "Sorry to hear this.<br>Keep trying...<br>You will get better result.";
        }else if (input == "youtube link to improve communication") {
            return "sure, I will give some link watch it.That improve your communication<br>1. https://youtu.be/HAnw168huqA<br>2. https://youtu.be/ILAxzXEfJpU<br>3. https://youtu.be/henIVlCPVIY";
        
        }
        //interview 
        if (input == "2") {
            return "your selected 2 that is Interview Question & Answer<br>Its ok i will ask few questions to you pls answer.<br>Are you ready! To start interview type start interview";
        } else if (input == "start interview") {
            return "Q1] Can you tell us about yourself?<br><br>Type your answer...<br>Note: To know correct answer type int1";
        } else if (input == "int1") {
    
            return "Answer: Sure, my name is [your name], and I have [number of years] of experience in [industry/profession]. I have a degree in [field of study], and I've worked for several different companies in [specific job roles]. In my previous positions, I've been responsible for [list key responsibilities or achievements]. I'm passionate about [specific interests or skills relevant to the job], and I'm excited about the opportunity to bring my experience and skills to this position.<br><br>For next question type q2";
        }else if (input == "q2") {
            return "Q2] What are your greatest strengths and weaknesses?<br><br>Type your answer...<br>Note: To know correct answer type int2";
        }else if (input == "int2") {
            return "Answer: My greatest strength is [specific skill or trait]. For example, I am highly organized and detail-oriented, which has helped me in my previous positions. As for my weaknesses, I sometimes struggle with [specific weakness], but I am working to improve by [specific steps you are taking to improve].<br><br>For next question type q3";
        }else if (input == "q3") {
            return "Q3] How do you work in a team environment?<br><br>Type your answer...<br>Note: To know correct answer type int3";
        }else if (input == "int3") {
            return "Answer: I work well in a team environment by [specific ways you collaborate with others]. For example, I make sure to communicate clearly and actively listen to my team members, share my ideas and insights, and contribute to the team's goals and objectives.<br><br>For next question type q4";
        }else if (input == "q4") {
            return "Q4] What motivates you to succeed?<br><br>Type your answer...<br>Note: To know correct answer type int4";
        }else if (input == "int4") {
            return "Answer: I am motivated to succeed by [specific motivators]. For example, I am motivated by achieving my goals, making a positive impact, and continuously improving my skills and knowledge.<br><br>For next question type q5";
        }else if (input == "q5") {
            return "Q5] Where do you see yourself in five years?<br><br>Type your answer...<br>Note: To know correct answer type int5";
        }else if (input == "int5") {
            return "Answer: In five years, I see myself [specific career goals]. For example, I see myself taking on more responsibilities, leading a team, or gaining additional skills or certifications. I am excited about the opportunity to grow and develop in this position and the industry.<br><br>Interview end.<br>I hope that your learned something.<br>Your happy-Type(yes/no)";
        }
    
        //Resume Preperation
        if (input == "3") {
            return "your selected 3 that is Resume Preperation<br><br>Type your need:<br>procedure to prepare resume<br>build a resume";
        }else if (input == "procedure to prepare resume") {
            return "Step1:<br>Choose the right format: There are several different resume formats, including chronological, functional, and hybrid formats. Choose the format that best showcases your skills and experience.<br><br>Step2:<br>Tailor your resume to the job: Review the job description and tailor your resume to highlight the skills and experience that are most relevant to the position.<br><br>Step3:<br>Use strong action verbs: Start each bullet point with a strong action verb, such as 'anaged', 'developed', or 'implemented', to showcase your accomplishments.<br><br>Step4:<br>Quantify your achievements: Whenever possible, quantify your achievements with numbers or percentages to give the hiring manager a clear idea of your impact.<br><br>Step5:<br>Keep it concise: Keep your resume to one or two pages and use bullet points to make it easy to read.<br><br>Step6:<br>Proofread carefully: Review your resume carefully for spelling and grammar errors. Consider having someone else review it as well.<br><br>Step7:<br>Include relevant sections: Your resume should include sections such as education, work experience, skills, and certifications, depending on your background and the job requirements.<br><br>Step8:<br>Customize your resume for each job: Tailor your resume to each job you apply for, emphasizing the skills and experience that are most relevant to the position.<br><br>Step9:<br>Make it visually appealing: Use a clean, easy-to-read font and include plenty of white space to make your resume visually appealing and easy to navigate.<br><br>Step10*:<br>Consider a professional review: If you're struggling with your resume, consider seeking the help of a professional resume writer or career counselor to ensure that your resume is as strong as possible.<br>GOOD LUCK!<br><br>Your happy-Type(yes/no)";
        } else if (input == "build a resume") {
            return "I'm happy to build a resume. However, since I'm an AI language model and don't have access to your personal information, I cannot create a customized resume for you. Nonetheless, I can provide you with a general template that you can adapt to your own needs and experiences. Here's an example of a simple chronological resume:<br><br>[Your name]<br>[Your address]<br>[Your phone number]<br>[Your email address]<br><br>Summary<br>[Optional: Write a brief summary of your skills, experience, and career objectives.]<br><br>Education<br>[Name of school], [Degree, major], [Graduation date]<br>[Relevant coursework or academic achievements]<br><br>Work Experience<br>[Name of company], [Job title], [Employment dates]<br><br>[Responsibility or achievement]<br>[Responsibility or achievement]<br>[Responsibility or achievement]<br><br>[Name of company], [Job title], [Employment dates]<br><br>[Responsibility or achievement]<br>[Responsibility or achievement]<br>[Responsibility or achievement]<br><br>Skills<br>[Relevant skills or certifications, such as proficiency in a particular software, language, or technical skill.]<br><br>References<br>[Optional: List 2-3 professional references, including their name, title, and contact information.]<br><br>Remember to customize your resume for each job application and to highlight the skills and experiences that are most relevant to the position. Also, be sure to proofread your resume carefully for spelling and grammar errors before submitting it.<br>GOOD LUCK!<br><br>Your happy-Type(yes/no)";
        } 
    
        //Entertainment
         if (input == "hi") {
            return "Hii,how can i help you!";
        }else if (input == "4") {
            return "Your selected Entertainment<br>type mcu...";
        }
         else if (input == "mcu") {
            return "The list of Marvel Cinematic Universe (MCU):<br><br>The Infinity Saga: Phase One (2008-2012)<br><br>Iron Man (May 2, 2008)<br>The Incredible Hulk (June 13, 2008)<br>Iron Man 2 (May 7, 2010)<br>Thor (May 6, 2011)<br>Captain America: The First Avenger (July 22, 2011)<br>Marvel’s The First Avengers (May 4, 2012)<br>Phase Two (2013-2015)<br><br>Iron Man 3 (May 3, 2013)<br>Thor: The Dark World (November 8, 2013)<br>Captain America: The Winter Soldier (April 4, 2014)<br>Guardians of the Galaxy (August 1, 2014)<br>Avengers: Age of Ultron (May 1, 2015)<br>Ant-Man (July 17, 2015)<br>Phase Three (2016-2019)<br><br>Captain America: Civil War (May 6, 2016)<br>Doctor Strange (November 4, 2016)<br>Guardians of the Galaxy Vol. 2 (May 5, 2017)<br>Spider-Man: Homecoming (July 7, 2017)<br>Thor: Ragnarok (November 3, 2017)<br>Black Panther (February 16, 2018)<br>Avengers: Infinity War (April 27, 2018)<br>Ant-Man and the Wasp (July 6, 2018)<br>Captain Marvel (March 8, 2019)<br>Avengers: Endgame (April 26, 2019)<br>Spider-Man: Far From Home (July 2, 2019)<br>The Multiverse Saga: Phase Four (2021-2022)<br><br>Black Widow (July 9, 2021)<br>Shang-Chi and the Legend of the Ten Rings (September 3, 2021)<br>Eternals (November 5, 2021)<br>Spider-Man: No Way Home (December 17, 2021)<br>Doctor Strange in the Multiverse of Madness (May 6, 2021)<br>Thor: Love and Thunder (July 8, 2022)<br>Black Panther: Wakanda Forever (November 11, 2022)<br>Phase Five (2023-2024)<br><br>Ant-Man and the Wasp: Quantumania (February 17, 2023)<br><br>Upcomming <br><br>Guardians of the Galaxy Vol. 3 (May 5, 2023)<br>The Marvels (November 11, 2023)<br>Captain America: New World Order (May 3, 2024<br>Thunderbolts (July 26, 2024)<br>Blade (September 6, 2024)<br>Phase Six (2024-2026)<br><br>Deadpool 3 (November 8, 2024)<br>Fantastic Four (February 14, 2025)<br>Avengers: The Kang Dynasty (May 2, 2025)<br>Avengers: Secret Wars (May 1, 2026)";
        } 
    
    
        // Simple responses
        if (input == "hello") {
            return "Hello there!";
        }else if (input == "bye") {
            return "Bye...Talk to you later!";
        } else if (input == "ok") {
            return "Okay!<br>HAVE A NICE DAY";
        }else {
            return "Sorry i can't understand.<br>Try asking something else!<br>Type: help";
        }
    }