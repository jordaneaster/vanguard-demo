import ProfileWorksheet from './ProfileWorksheet';

export default function ProfileWorksheets(user) {
    if(user.worksheets.length > 0) {
        return `
            <div class="profile_worksheets__container">
                ${user.worksheets.map((worksheet) => {
                    const date = new Date(worksheet.timeStampMillis);
                    return `
                        <div class="worksheet__title"> 
                            <a class="worksheet__link" href='#'>${worksheet.title}</a>
                            <span> ${date} </span>
                            <input type="button" class="delete" value="Delete" />
                            <input type='hidden' class='worksheetId' value='${worksheet.id}'/>
                            
                        </div>
                        
                    `;
                    
                }).join('')}
            </div>
        `;
    } else {
      return `
        <p>No Activities worksheet submissions yet</p>
      `;
    }
  }