// ==UserScript==
// @name         Real Time GPA Calculator UCAS
// @namespace    https://github.com/TimeSea05/gpa-calc-ucas
// @version      0.1
// @description  calculate your gpa in real time
// @author       Avalanche
// @match        https://jwxk.ucas.ac.cn/score/bks/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function() {
  'use strict';
  let userInfoTable = document.querySelectorAll('table')[0];
  let scoreTable = document.querySelectorAll('table')[1];
  let totalCredits = 0, totalScore = 0, totalGradePoints = 0;
  let gradePointAverage = 0, scoreAverage = 0;

  function getGradePoint(score) {
    // 分数和GPA的对应表
    let scoreGPAObj = {
      90: 4.0, 89: 3.9, 88: 3.9, 87: 3.9, 86: 3.8,
      85: 3.8, 84: 3.7, 83: 3.7, 82: 3.6, 81: 3.5,
      80: 3.5, 79: 3.4, 78: 3.4, 77: 3.3, 76: 3.3,
      75: 3.2, 74: 3.1, 73: 3.0, 72: 2.9, 71: 2.8,
      70: 2.7, 69: 2.7, 68: 2.6, 67: 2.5, 66: 2.4,
      65: 2.3, 64: 2.3, 63: 2.2, 62: 2.1, 61: 1.8,
      60: 1.6
    };

    if (score >= 90) return scoreGPAObj[90];
    else if (score >= 60 && score < 90) return scoreGPAObj[score];
  }

  for (let i = 1; i < scoreTable.rows.length; i++) {
    // 第一行是表头, 跳过
    // 在每一行中, 表格的第四列和第五列分别是学分和成绩

    // 如果分数一栏是"合格", "不合格"等非数字字样，那么跳过
    if (Number.isNaN(Number(scoreTable.rows[i].cells[4].innerHTML))) continue;
    
    let credit = Number(scoreTable.rows[i].cells[3].innerHTML);
    let score = Number(scoreTable.rows[i].cells[4].innerHTML);
    
    totalCredits += credit;
    totalScore += credit * score;
    totalGradePoints += credit * getGradePoint(score);
  }

  if (totalScore == 0) {
    let courseResult = document.querySelectorAll('h5')[document.querySelectorAll('h5').length - 1];
    courseResult.innerHTML += '(脚本未生效)';
    return;
  }

  gradePointAverage = (totalGradePoints / totalCredits).toFixed(2);
  scoreAverage = (totalScore / totalCredits).toFixed(2);
  
  let currentURL = document.URL;
  let gpaProp = null;
  if (currentURL.includes('all')) gpaProp = '所有学期';
  else gpaProp = '当前学期';

  // 更改个人信息栏中的GPA等信息
  userInfoTable.rows[2].cells[0].innerHTML = gpaProp + `GPA(实时): ${gradePointAverage}`;
  userInfoTable.rows[2].cells[1].innerHTML += '(非实时)';

  // 增加平均分信息
  let tr = document.createElement('tr');
  let gradePointAverageTd = document.createElement('td');
  gradePointAverageTd.innerHTML = `加权平均分(实时): ${scoreAverage}`;
  tr.append(gradePointAverageTd);
  tr.append(document.createElement('td')); // 添加空栏
  userInfoTable.append(tr);
})();