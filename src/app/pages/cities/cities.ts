import { Component } from '@angular/core';

interface Governorate {
  name: string;
  capital: string;
  description: string;
  image: string;
  cities: string[];
  link: string;
}

@Component({
  selector: 'app-cities',
  imports: [],
  templateUrl: './cities.html',
  styleUrl: './cities.css',
})
export class Cities {

  governorates: Governorate[] = [

    {
      name: 'Cairo',
      capital: 'Cairo',
      description: 'The capital of Egypt and its largest city.',
      image: 'https://images.seeklogo.com/logo-png/19/2/cairo-logo-png_seeklogo-196954.png',
      cities: [
        'Cairo',
        'Nasr City',
        'Heliopolis',
        'New Cairo',
        'Maadi',
        'Shubra',
        'Ain Shams',
        'New Capital'
      ],
      link: 'https://en.wikipedia.org/wiki/Cairo'
    },


    {
      name: 'Giza',
      capital: 'Giza',
      description: 'Home to the Great Pyramids and the Sphinx.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/d/dd/Coat_of_arms_of_Giza_Governorate.png',
      cities: [
        'Giza',
        '6th of October',
        'Sheikh Zayed',
        'Dokki',
        'Mohandessin',
        'Imbaba',
        'Haram'
      ],
      link: 'https://en.wikipedia.org/wiki/Giza_Governorate'
    },


    {
      name: 'Alexandria',
      capital: 'Alexandria',
      description: 'A famous Mediterranean coastal city.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/5/57/Coat_of_Arms_-_Alexandria%2C_Egypt.svg',
      cities: [
        'Alexandria',
        'Smouha',
        'Sidi Gaber',
        'Miami',
        'Montaza',
        'Stanley',
        'Borg El Arab'
      ],
      link: 'https://en.wikipedia.org/wiki/Alexandria'
    },


    {
      name: 'Dakahlia',
      capital: 'Mansoura',
      description: 'A governorate in the Nile Delta region.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/0/00/Dakahlya_Governorate_Seal_-_Egypt.svg',
      cities: [
        'Mansoura',
        'Talkha',
        'Mit Ghamr',
        'Aga',
        'Sherbin'
      ],
      link: 'https://en.wikipedia.org/wiki/Dakahlia_Governorate'
    },


    {
      name: 'Gharbia',
      capital: 'Tanta',
      description: 'A central governorate in the Nile Delta.',
      image: 'https://sis.gov.eg/media/322652/%D9%85%D8%AD%D8%A7%D9%81%D8%B8%D8%A9-%D8%A7%D9%84%D8%BA%D8%B1%D8%A8%D9%8A%D8%A9.jpg',
      cities: [
        'Tanta',
        'El Mahalla El Kubra',
        'Zefta',
        'Kafr El Zayat',
        'Santa'
      ],
      link: 'https://en.wikipedia.org/wiki/Gharbia_Governorate'
    },


    {
      name: 'Qalyubia',
      capital: 'Banha',
      description: 'Located north of Cairo in the Nile Delta.',
      image: 'https://e7.pngegg.com/pngimages/454/679/png-clipart-governorates-of-egypt-cairo-governorate-greater-cairo-banha-aswan-governorate-tiflis-governorate-egypt-arm-thumbnail.png',
      cities: [
        'Banha',
        'Shubra El Kheima',
        'Qalyub',
        'Khosous',
        'Obour'
      ],
      link: 'https://en.wikipedia.org/wiki/Qalyubia_Governorate'
    },


    {
      name: 'Kafr El Sheikh',
      capital: 'Kafr El Sheikh',
      description: 'A northern governorate known for agriculture.',
      image: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Emblem_Kafr_el-Sheikh_Governorate.jpg',
      cities: [
        'Kafr El Sheikh',
        'Desouk',
        'Baltim',
        'Metoubes',
        'Fuwwah'
      ],
      link: 'https://en.wikipedia.org/wiki/Kafr_el-Sheikh_Governorate'
    },


    {
      name: 'Monufia',
      capital: 'Shibin El Kom',
      description: 'A governorate located in the Nile Delta.',
      image: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Emblem_Monufia_Governorate.jpg',
      cities: [
        'Shibin El Kom',
        'Menouf',
        'Ashmoun',
        'Sadat',
        'Quesna'
      ],
      link: 'https://en.wikipedia.org/wiki/Monufia_Governorate'
    },


    {
      name: 'Damietta',
      capital: 'Damietta',
      description: 'A coastal governorate famous for furniture and crafts.',
      image: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Emblem_Damietta_Governorate.jpg',
      cities: [
        'Damietta',
        'New Damietta',
        'Ras El Bar',
        'Kafr Saad',
        'Faraskour'
      ],
      link: 'https://en.wikipedia.org/wiki/Damietta_Governorate'
    },


    {
      name: 'Ismailia',
      capital: 'Ismailia',
      description: 'A peaceful city located along the Suez Canal.',
      image: 'https://sis.gov.eg/media/322497/%D9%85%D8%AD%D8%A7%D9%81%D8%B8%D8%A9-%D8%A7%D9%84%D8%A5%D8%B3%D9%85%D8%A7%D8%B9%D9%8A%D9%84%D9%8A%D8%A9.jpg',
      cities: [
        'Ismailia',
        'Fayed',
        'Qantara East',
        'Qantara West'
      ],
      link: 'https://en.wikipedia.org/wiki/Ismailia_Governorate'
    },


    {
      name: 'Suez',
      capital: 'Suez',
      description: 'An important city at the southern entrance of the Suez Canal.',
      image: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Emblem_Suez_Governorate.jpg',
      cities: [
        'Suez',
        'Ain Sokhna',
        'Ataka'
      ],
      link: 'https://en.wikipedia.org/wiki/Suez_Governorate'
    },


    {
      name: 'Beni Suef',
      capital: 'Beni Suef',
      description: 'A governorate located in Upper Egypt.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Beni_Suef_Governorate_New_Flag.svg/1280px-Beni_Suef_Governorate_New_Flag.svg.png',
      cities: [
        'Beni Suef',
        'Al Wasta',
        'Nasser',
        'Biba',
        'Fashn'
      ],
      link: 'https://en.wikipedia.org/wiki/Beni_Suef_Governorate'
    },


    {
      name: 'Minya',
      capital: 'Minya',
      description: 'A historic governorate in Upper Egypt.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/f/f1/Coat_of_arms_of_Minya_Govenorate.JPG',
      cities: [
        'Minya',
        'Mallawi',
        'Samalut',
        'Maghagha',
        'Beni Mazar'
      ],
      link: 'https://en.wikipedia.org/wiki/Minya_Governorate'
    },


    {
      name: 'Assiut',
      capital: 'Assiut',
      description: 'An important cultural and educational center in Upper Egypt.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/6/62/Coat_of_arms_of_Assiut_Governorate.png',
      cities: [
        'Assiut',
        'Manfalut',
        'Abnoub',
        'Dairut',
        'Qusiya'
      ],
      link: 'https://en.wikipedia.org/wiki/Asyut_Governorate'
    },


    {
      name: 'Sohag',
      capital: 'Sohag',
      description: 'A governorate rich in ancient Egyptian history.',
      image: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Emblem_Sohag_Governorate.svg',
      cities: [
        'Sohag',
        'Akhmim',
        'Girga',
        'Tahta',
        'Juhaynah'
      ],
      link: 'https://en.wikipedia.org/wiki/Sohag_Governorate'
    },


    {
      name: 'Luxor',
      capital: 'Luxor',
      description: 'A world-famous city known for ancient temples and monuments.',
      image: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Emblem_Luxor_Governorate.jpg',
      cities: [
        'Luxor',
        'Esna',
        'Armant',
        'Al Bayadiyah'
      ],
      link: 'https://en.wikipedia.org/wiki/Luxor_Governorate'
    }

  ];


  openLink(link: string) {
    window.location.href = link;
  }

}