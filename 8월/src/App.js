// import React from 'react';
import logo from './logo.svg';
import './App.css';
import './main.css';
import './style.css';
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>

function App() {

  var imgNum = 2;

  // function checkOnlyOne(element) {
  //   const checkboxes = Array.from(document.getElementsByName("chotype")[0]);
  
  //   // checkboxes.forEach((cb) => {
  //   //     cb.checked = false;
  //   // })
  //   checkboxes.map((cb) => {cb.checked = false});
  
  //   element.checked = true;
  // }

  function CheckTest() {
    var arrSelect = document.getElementsByName("chotype");
    for (var i = 0; i < arrSelect.length; i++){
        if(arrSelect[i].checked){
            return true;
        }
    }
  }
  
  
  function toggleImg(){
    
    const checkboxes = document.getElementsByName('chotype');
        if (CheckTest())
            document.getElementById("img").src = "./img/"+imgNum+".jpg";
            
        else {
            alert("항목을 선택하세요.");
            return false;
        }
        if (imgNum < 6) 
          imgNum++;
        else 
          imgNum = 1;
  
        checkboxes.forEach((checkbox) => {
            checkbox.checked = false;
        })
  }  

  return (
    <div class="background-container">
        <div class="container-xl">
            <div class="content-container">
                <div class="title-container">
                    <h1 class="title">Momogo</h1>
                    <img src="./img/1.jpg" id="img"></img>
                </div>
                <form action="#" class="submit-container" method="post">
                    <div class="choose-container">
                        <div class="question-container">
                            <div class="question">
                              <input type="checkbox" name='chotype' value = 'dislike' id="checkbox1"/>
                              <label class="checkbox-label" for="checkbox1">싫어한다</label>
                            </div>
                          
                            <div class="question">
                              <input type="checkbox" name='chotype' value = 'often'id="checkbox2"/>
                              <label class="checkbox-label" for="checkbox2">가끔먹는다</label>
                            </div>
                          
                            <div class="question">
                              <input type="checkbox" name='chotype' value = 'like' id="checkbox3" />
                              <label class="checkbox-label" for="checkbox3">좋아한다</label>
                            </div>
                        </div>
                    </div>           
                </form>
                <div class="btn-container">
                    <button onclick={toggleImg}>확인</button>
                </div> 
            </div>
        </div>
    </div>
  );
}




export default App;
