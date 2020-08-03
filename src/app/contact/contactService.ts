import{Contact} from './contact';
export class ContactService
{
  contact:Contact;
    contacts:Contact[];
    contactSearch:Contact[];
    constructor()
    {
    this.contacts=[];
    this.contactSearch=[];
    var contact1,contact2,contact3,contact4,contact5;

    contact1=new Contact();
    contact1.contact_fname ="Eric ";
    contact1.contact_lname="Elliot";
    contact1.phone_number="2225556575";

    contact2=new Contact();
    contact2.contact_fname ="Steve";
    contact2.contact_lname="Jobs";
    contact2.phone_number="2204546754";

    contact3=new Contact();
    contact3.contact_fname ="Fred";
    contact3.contact_lname="Allen";
    contact3.phone_number="2106579886";

    contact4=new Contact();
    contact4.contact_fname ="Steve";
    contact4.contact_lname="Wozniak";
    contact4.phone_number="3436758786";

    contact5=new Contact();
    contact5.contact_fname ="Bill";
    contact5.contact_lname="Gates";
    contact5.phone_number="2345679789";
    
    this.contacts.push(contact1);
    this.contacts.push(contact2);
    this.contacts.push(contact3);
    this.contacts.push(contact4);
    this.contacts.push(contact5);
    }
    getContacts():Contact[]
    {
        return this.contacts;
    }
    addContact()
    {
      this.contacts.push(this.contact);
      this.contact = new Contact();
    }
    
    editContact(con:Contact)
    {
      for (let index = 0; index < this.contacts.length; index++)
      {
        if(this.contacts[index].contact_fname ==con.contact_fname )
        {
            this.contacts[index]=con;
        }
      }
    }
    searchcontacts(search:string):Contact[]
    {   
      if(search=="")
      {
        return this.contacts;
      }
      else
      {   this.contactSearch=[];

        for(let index=0; index<this.contacts.length;index++)
        {
            if(search.toLowerCase()==this.contacts[index].contact_fname .toLowerCase() || search.toLowerCase()==this.contacts[index].contact_lname .toLowerCase() || search==this.contacts[index].phone_number.toString() )
            {
                this.contactSearch.push(this.contacts[index]);
            }
        }
        return this.contactSearch;
      }
    }
    deleteContact(con:Contact)
    {
        console.log(con);
        var present:Boolean = false; 
        var notpresent:Boolean=false;
        
        for (let index = 0; index < this.contacts.length; index++)
         {
            if(this.contacts[index].contact_fname ==con.contact_fname )
                {  
                    console.log(this.contacts[index]);
                     present==true;
                    this.contacts.splice(index,1);                   
                 }           
         }

         if(present==false)
         {
            notpresent=true;
        }
    }
}
