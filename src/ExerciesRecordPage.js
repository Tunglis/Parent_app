import React, {useState,useEffect}  from 'react'
import {Form,Col,Row,Card,Container,ProgressBar } from 'react-bootstrap';
import './css/ExerciesRecordPage.css';
import './css/calendar.css';

import styled from 'styled-components';
function ExerciesRecordPage()
{   
    useEffect(() => {
        const daysTag = document.querySelector('.days'),
        currentDate = document.querySelector('.current-date'),
        prevNextIcon = document.querySelectorAll(".icons span");
        let date = new Date(),
        currYear = date.getFullYear(),
        currMonth = date.getMonth(),
        ckdate ;
        
        
        // storing full name of all months in array
        const months = ["1-", "2-", "3-", "4-", "5-", "6-", "7-",
                      "8-", "9-", "10-", "11-", "12-"];
        
        const renderCalendar = () => {
            let firstDayofMonth = new Date(currYear, currMonth, 1).getDay(), // getting first day of month
            lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate(), // getting last date of month
            lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay(), // getting last day of month
            lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate(); // getting last date of previous month
            let liTag = "";
        
            for (let i = firstDayofMonth; i > 0; i--) { // creating li of previous month last days
                liTag += `<li class="inactive " disabled> &nbsp;</li>`;
            }
        
            for (let i = 1; i <= lastDateofMonth; i++) { // creating li of all days of current month
                // adding active class to li if the current day, month, and year matched
                let isToday = i === date.getDate() && currMonth === new Date().getMonth() 
                             && currYear === new Date().getFullYear() ? "active" : "";
                liTag += `<li class="${isToday}" id="${currYear}-${months[currMonth]}${i}"  data-bs-toggle="modal" data-bs-target="#exampleModal" ><hr style="margin: 0px;margin-bottom:15px;color:black ">${i}</li>`;
            }
        
            for (let i = lastDayofMonth; i < 6; i++) { // creating li of next month first days
                liTag += `<li class="inactive" disabled> &nbsp;</li>`
            }
            currentDate.innerText = `${months[currMonth]} ${currYear}`; // passing current mon and yr as currentDate text
            daysTag.innerHTML = liTag;
        
            var listItems = document.querySelectorAll("ul li");
        
        listItems.forEach(function(item) {
            
          item.onclick = function(e) {
            var currMonth1 =currMonth+1;
            ckdate= currYear+'-'+currMonth1 +'-'+this.innerText;
            document.getElementById('output').innerText = ckdate;
             
          }
        });
        }
        renderCalendar();
       
        prevNextIcon.forEach(icon => { // getting prev and next icons
            icon.addEventListener("click", () => { // adding click event on both icons
                // if clicked icon is previous icon then decrement current month by 1 else increment it by 1
                currMonth = icon.id === "prev" ? currMonth - 1 : currMonth + 1;
        
                if(currMonth < 0 || currMonth > 11) { // if current month is less than 0 or greater than 11
                    // creating a new date of current year & month and pass it as date value
                    date = new Date(currYear, currMonth, new Date().getDate());
                    currYear = date.getFullYear(); // updating current year with new date year
                    currMonth = date.getMonth(); // updating current month with new date month
             
                } else {
                    date = new Date(); // pass the current date as date value
                }
                renderCalendar(); 
               
            });
        });
  });
    
  
  // getting new date, current year and month
 
    return(
   
        
        <div>
            
    <Row>
      <Col xs={6}>
      <Form.Select  id="Ptype" className='text-light'>
        <option>Default select</option>
      </Form.Select>
      </Col>
      </Row>
        <Container>
      <Card>
      <Card.Body>
      <p style={{textAlign:"right"}}>
    <a className="card-link" >
    <img src={require('./img/abcd.png')} width={"30%"} height={"30%"} />
    </a></p>
    <h1>2023-05</h1><br/>
    completion ratio %
    <ProgressBar animated now={45} />
    <br/>
    Score ratio %
    <ProgressBar animated now={45} />
      </Card.Body>
    </Card>
    </Container>
    <br/>
    <div className="container" id="calendarbox">
<div className="wrapper" id="calendarwrapper"  >
      <header>
        <p className="current-date"></p>
        <div className="icons">
          <span id="prev" className="material-symbols-rounded" ><img src={require('./img/arrow_back_ios_FILL0_wght400_GRAD0_opsz48.png')} width={"50%"} height={"50%"} /></span>
          <span id="next" className="material-symbols-rounded" ><img src={require('./img/arrow_forward_ios_FILL0_wght400_GRAD0_opsz48.png')} width={"50%"} height={"50%"} /></span>
        </div>
      </header>
      <div className="calendar" id="calendar" >
        <ul className="weeks" id="days"   disabled >
          <li >Sun</li>
          <li>Mon</li>
          <li>Tue</li>
          <li>Wed</li>
          <li>Thu</li>
          <li>Fri</li>
          <li>Sat</li>
        </ul>
        <ul className="days" id="days1"  ></ul>
      </div>
    </div>
</div>

<br/>
<br/>
<br/>
<br/>
        </div>
        
    )
}



export default ExerciesRecordPage;