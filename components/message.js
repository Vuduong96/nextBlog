import Moment from 'react-moment';

export default function Message({children, avatar, username, timestamp, description}){
    if(!timestamp){
        console.log('Getting timestamp..')
    }
    else{
        var date = new Date(timestamp.seconds * 1000);
    }

    console.log(date); // result: Wed Jan 12 2011 12:42:46 GMT-0800 (PST)
    return(
        <div className="bg-white p-8 border-b-2 rounded-lg">
            <div className="flex items-center gap-3">
                <img src={avatar} className="w-10 rounded-full" />
                <h2>{username}</h2>
               
            </div>
            <div 
            className="text-cyan-800 text-right text-sm"
>
                <Moment  
                format="DD-MM-YYYY">
                    {date}
                </Moment>
            </div>
            <div className="py-4">
                <p>{description}</p>
            </div>
            {children}
        </div>
    )
}