const Header = () => {
    const date = new Date();
const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
    
    return (
        <div className="header">
              {days[date.getDay()]} ,
              {date.getDate()}   
             {months[date.getMonth()]}     
        </div>
    )
}

export default Header
