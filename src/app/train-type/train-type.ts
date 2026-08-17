import { Component } from '@angular/core';

export interface TrainType {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
}

@Component({
  selector: 'app-train-type',
  standalone: true,
  templateUrl: './train-type.html',
  styleUrls: ['./train-type.css']
})
export class TrainTypeComponent {
  trains: TrainType[] = [
    {
      id: 1,
      name: 'محسن (تحيا مصر)',
      description: 'القطارات الاقتصادية والمطورة، خيار مثالي ومناسب للتنقل اليومي السريع بتكلفة بسيطة للجميع.',
      imageUrl: 'img/mohsan.webp'
    },
    {
      id: 2,
      name: 'روسي (تهوية ديناميكية)',
      description: 'قطارات روسية مجهزة بنظام التهوية الديناميكية، توفر لك رحلة مريحة واقتصادية بفضل تصميمها العملي.',
      imageUrl: 'img/rose.webp'
    },
    {
      id: 3,
      name: 'مكيف روسي',
      description: 'قطارات روسية حديثة مزودة بتكييف هواء مركزي لضمان أقصى درجات الراحة للمسافرين طوال فترة الرحلة.',
      imageUrl: 'img/mokeph.webp'
    },
    {
      id: 4,
      name: 'مكيف إسباني',
      description: 'قطارات مكيفة ومريحة توفر تجربة سفر فاخرة وسريعة بأعلى معايير الجودة وخدمات مميزة تلبي احتياجاتك.',
      imageUrl: 'img/asbane.webp'
    },
    {
      id: 5,
      name: 'قطار النوم',
      description: 'قطارات مجهزة بكبائن نوم فاخرة ومريحة، مصممة خصيصاً لتوفير تجربة سفر هادئة وممتعة للمسافات الطويلة وتضمن لك الوصول بكامل نشاطك.',
      imageUrl: 'img/nome.webp'
    }
  ];
}