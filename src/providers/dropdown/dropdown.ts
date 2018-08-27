import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class DropdownProvider {

  dropdowns = [{
    name : 'About IRTS',
    a : 'http://www.irts.org.in/view_section1.jsp?lang=0&id=0,1',
    dropdown : [
       {
          link : 'Present Role And Future of IRTS',
          a :  'http://www.irts.org.in/view_section1.jsp?lang=0&id=0,1,408'
       },
       {
          link : 'IRTS Association',
          a :  'http://www.irts.org.in/view_section1.jsp?lang=0&id=0,1,408'
       },
       {
        link : 'Railway Board Directorates',
        a :  'http://www.irts.org.in/view_section1.jsp?lang=0&id=0,1,408'
     },
     {
        link : 'B.M.S.Bisht Page',
        a :  'http://www.irts.org.in/view_section1.jsp?lang=0&id=0,1,408'
     }
    ]
  },
  {
    name : 'Professional Section',
    a : '',
    dropdown : [
       {
          link : 'Presentation and Articles ',
          a :  'http://www.irts.org.in/view_section1.jsp?lang=0&id=0,1,408'
       },
       {
          link : 'National And International Scenarios',
          a :  'http://www.irts.org.in/view_section1.jsp?lang=0&id=0,1,408'
       },
       {
        link : 'Opportunities',
        a :  'http://www.irts.org.in/view_section1.jsp?lang=0&id=0,1,408'
     },
     {
        link : 'Virtual Data Base',
        a :  'http://www.irts.org.in/view_section1.jsp?lang=0&id=0,1,408'
     },
     {
        link : 'Initiatives Taken By IRTS Officers',
        a :  'http://www.irts.org.in/view_section1.jsp?lang=0&id=0,1,408'
     }
    ]
  },
  {
    name : 'Personal Section'
  },
  {
    name : 'Contact Us'
  }
];
  constructor(public _http: Http) {
    console.log('Hello DropdownProvider Provider');
  }

}
