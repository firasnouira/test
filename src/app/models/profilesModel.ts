export class Profile { 
    //all the personal info 
    key: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    description: string;
    adress: string;
    phoneNumber: number;
    //features
    // ADD A CALENDER TO TRACK ACTIVE DAYS. THIS VALUE EVERY DAY SHOULD BE RESET TO TRUE WHEN LOGGED IN AND FALSE AT MID NIGHT (FOR LOOP) 
    activeTrackDays: boolean;
    activeTrackHours: string;
    books: Array<{ id: number, notes: string, finished: boolean }>;
    friends: Array<string>;
    reservation : Array<{name:string , comers: number, numberoftable : number,  }>;
    
}

