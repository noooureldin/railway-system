import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Governorate {
  name: string;
  capital: string;
  description: string;
  image: string;
}

@Component({
  selector: 'app-cities',
  imports: [CommonModule],
  templateUrl: './cities.html',
  styleUrl: './cities.css',
})
export class Cities {

  governorates: Governorate[] = [

    {
  name: 'Cairo',
  capital: 'Cairo',
  description: 'The capital of Egypt and its largest city.',
  image: 'https://images.seeklogo.com/logo-png/19/2/cairo-logo-png_seeklogo-196954.png'
},

{
  name: 'Giza',
  capital: 'Giza',
  description: 'Home to the Great Pyramids and the Sphinx.',
  image: 'https://upload.wikimedia.org/wikipedia/commons/d/dd/Coat_of_arms_of_Giza_Governorate.png?utm_source=ar.wikipedia.org&utm_campaign=index&utm_content=original'
},

{
  name: 'Alexandria',
  capital: 'Alexandria',
  description: 'A famous Mediterranean coastal city.',
  image: 'https://upload.wikimedia.org/wikipedia/commons/5/57/Coat_of_Arms_-_Alexandria%2C_Egypt.svg?utm_source=ar.wikipedia.org&utm_campaign=index&utm_content=original'
},

{
  name: 'Dakahlia',
  capital: 'Mansoura',
  description: 'A governorate in the Nile Delta region.',
  image: 'https://upload.wikimedia.org/wikipedia/commons/0/00/Dakahlya_Governorate_Seal_-_Egypt.svg?utm_source=ar.wikipedia.org&utm_campaign=index&utm_content=original'
},



{
  name: 'Gharbia',
  capital: 'Tanta',
  description: 'A central governorate in the Nile Delta.',
  image: 'https://sis.gov.eg/media/322652/%D9%85%D8%AD%D8%A7%D9%81%D8%B8%D8%A9-%D8%A7%D9%84%D8%BA%D8%B1%D8%A8%D9%8A%D8%A9.jpg'
},

{
  name: 'Qalyubia',
  capital: 'Banha',
  description: 'Located north of Cairo in the Nile Delta.',
  image: 'https://e7.pngegg.com/pngimages/454/679/png-clipart-governorates-of-egypt-cairo-governorate-greater-cairo-banha-aswan-governorate-tiflis-governorate-egypt-arm-thumbnail.png'
},



{
  name: 'Kafr El Sheikh',
  capital: 'Kafr El Sheikh',
  description: 'A northern governorate known for agriculture.',
  image: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Emblem_Kafr_el-Sheikh_Governorate.jpg'
},

{
  name: 'Monufia',
  capital: 'Shibin El Kom',
  description: 'A governorate located in the Nile Delta.',
  image: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Emblem_Monufia_Governorate.jpg'
},

{
  name: 'Damietta',
  capital: 'Damietta',
  description: 'A coastal governorate famous for furniture and crafts.',
  image: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Emblem_Damietta_Governorate.jpg'
},



{
  name: 'Ismailia',
  capital: 'Ismailia',
  description: 'A peaceful city located along the Suez Canal.',
  image: 'https://sis.gov.eg/media/322497/%D9%85%D8%AD%D8%A7%D9%81%D8%B8%D8%A9-%D8%A7%D9%84%D8%A5%D8%B3%D9%85%D8%A7%D8%B9%D9%8A%D9%84%D9%8A%D8%A9.jpg'
},

{
  name: 'Suez',
  capital: 'Suez',
  description: 'An important city at the southern entrance of the Suez Canal.',
  image: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Emblem_Suez_Governorate.jpg'
},



{
  name: 'Beni Suef',
  capital: 'Beni Suef',
  description: 'A governorate located in Upper Egypt.',
  image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Beni_Suef_Governorate_New_Flag.svg/1280px-Beni_Suef_Governorate_New_Flag.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail'
},

{
  name: 'Minya',
  capital: 'Minya',
  description: 'A historic governorate in Upper Egypt.',
  image: 'https://upload.wikimedia.org/wikipedia/commons/f/f1/Coat_of_arms_of_Minya_Govenorate.JPG?utm_source=ar.wikipedia.org&utm_campaign=index&utm_content=original'
},

{
  name: 'Assiut',
  capital: 'Assiut',
  description: 'An important cultural and educational center in Upper Egypt.',
  image: 'https://upload.wikimedia.org/wikipedia/commons/6/62/Coat_of_arms_of_Assiut_Governorate.png?utm_source=ar.wikipedia.org&utm_campaign=index&utm_content=original'
},

{
  name: 'Sohag',
  capital: 'Sohag',
  description: 'A governorate rich in ancient Egyptian history.',
  image: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Emblem_Sohag_Governorate.svg'
},

{
  name: 'Luxor',
  capital: 'Luxor',
  description: 'A world-famous city known for ancient temples and monuments.',
  image: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Emblem_Luxor_Governorate.jpg'
}

  ];

}