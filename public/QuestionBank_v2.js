window.QuestionBank_v2 = (function () {
 
  const questions = [
    {
      questionId: "WORK_STATE",
      title: 'What state do work in now ?',
      inputName: 'us_state', 
      status: 'active',
    },
    {
        id: 1,
        title: 'Do you receive w2 from your employer ?',
        inputName: 'w2_q',
        status: 'active',
    },
    {
        id: 2,
        title: 'Have you worked on average at least 20 hours per week in the last 6 month ?',
        inputName: 'h20_q',
        status: 'active',
      },  
      {
          id: 3,
          title: 'Have you worked continuously at your company for at least 26 weeks(one half year)?',
          inputName: 'h26_q',
          status: 'active',
      }, 

      {
          id: 3,
          title: 'Have you worked continuously at your company for at least 26 weeks(one half year)?',
          inputName: 'h26_q',
          status: 'active',
      }, 




  ];

  return { questions: questions };
}());
