import "../../css/activities.css"
import nst from "../../images/nst.jpg"
export default function Activity(activity) {
    
    return `
        
        <div class="activity__container">
            <input type='hidden' class='activityId' value='${activity.id}'/>
            <input type='hidden' class='worksheetId' value='${activity.worksheet.id}'/>
            ${ returnUrlAndPageType(activity) }
            <a class='activity__title' href='#'><h2>${activity.title}</h2></a>
            <p class='activities-list__description'>${activity.description}</p>
        </div>
    `;
}

function returnUrlAndPageType(activity) {
    if (activity.worksheet.acceptUserInput) {
        return `
        <input type='hidden' class='displayUrl' value='../worksheet-forms/${activity.worksheet.title}.js'/>
        <input type='hidden' class='pageType' value='forms'/>
        `;
    } else {
        return `
        <input type='hidden' class='displayUrl' value='../activity-instructions/${activity.worksheet.title}.js'/>
        <input type='hidden' class='pageType' value='instructions'/>
        `;
    }
}