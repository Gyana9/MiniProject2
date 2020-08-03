export class Contact{
    contact_fname :string;
    contact_lname :string;
    phone_number:number;
    constructor(f_name?:string,l_name?:string,phn_no?:number)
    {
       this.contact_fname=f_name;
       this.contact_lname=l_name;
       this.phone_number=phn_no;
    }
}
//class="icomoon icon-address-book"  phone book
//<i class="fa fa-address-book"></i>
//class="ionicons ion-android-delete"   delete