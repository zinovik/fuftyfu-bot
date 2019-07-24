import { IDatabaseService } from './IDatabaseService.interface';
import { IHedgehog } from '../common/model/IHedgehog.interface';

export class Hardcode20190714 implements IDatabaseService {
  mockHedgehogs = [
    {
      where: ['Brest', 'Брест', 'Брэст'],
      who: 'Natasha and Tanja',
      when: '2013.05.XX',
      url: 'https://res.cloudinary.com/zinovik/image/upload/v1557849316/hedgehogs/2013.05.XX_001_Brest._Natasha_and_Tanja.jpg',
    },
    {
      where: ['Lviv', 'Lvov', 'Львов', 'Львiв'],
      who: 'Max',
      when: '2013.07.29',
      url: 'https://res.cloudinary.com/zinovik/image/upload/v1557849317/hedgehogs/2013.07.29_002_Lviv._Max.jpg',
    },
    {
      where: ['Krym', 'Крым'],
      who: 'Roma and Lena',
      when: '2013.08.XX',
      url: 'https://res.cloudinary.com/zinovik/image/upload/v1557849317/hedgehogs/2013.08.XX_003_Krym._Roma_and_Lena.jpg',
    },
    {
      where: ['Nyasvizh', 'Nesvizh', 'Нясвiж', 'Несвиж'],
      who: 'Roma and Lena',
      when: '2013.10.XX',
      url: 'https://res.cloudinary.com/zinovik/image/upload/v1557849317/hedgehogs/2013.10.XX_004_Nyasvizh._Roma_and_Lena.jpg',
    },
    {
      where: ['Brest', 'Брест', 'Брэст'],
      who: 'Roma and Lena',
      when: '2014.01.XX',
      url: 'https://res.cloudinary.com/zinovik/image/upload/v1557849317/hedgehogs/2014.01.XX_005_Brest._Roma_and_Lena.jpg',
    },
    {
      where: ['Mir', 'Мiр', 'Мир'],
      who: 'Lena',
      when: '2014.04.12',
      url: 'https://res.cloudinary.com/zinovik/image/upload/v1557849319/hedgehogs/2014.04.12_006_Mir._Lena.jpg',
    },
    {
      where: ['Nyasvizh & Mir 1', 'Nesvizh & Mir 1', 'Нясвiж & Мiр', 'Несвиж и Мир'],
      who: 'Lena',
      when: '2014.04.12',
      url: 'https://res.cloudinary.com/zinovik/image/upload/v1557849318/hedgehogs/2014.04.12_007_Nyasvizh_Mir_1._Lena.jpg',
    },
    {
      where: ['Nyasvizh & Mir 1', 'Nesvizh & Mir 1', 'Нясвiж & Мiр', 'Несвиж и Мир'],
      who: 'Lena',
      when: '2014.04.12',
      url: 'https://res.cloudinary.com/zinovik/image/upload/v1557849318/hedgehogs/2014.04.12_008_Nyasvizh_Mir_2._Lena.jpg',
    },
    {
      where: ['Hrodna', 'Grodno', 'Гродно', 'Гродна'],
      who: 'Lena',
      when: '2014.04.22',
      url: 'https://res.cloudinary.com/zinovik/image/upload/v1557849320/hedgehogs/2014.04.22_009_Hrodna._Lena.jpg',
    },
    {
      where: ['Polatsk', 'Polotsk', 'Полацк', 'Полоцк'],
      who: 'Lena',
      when: '2014.04.24',
      url: 'https://res.cloudinary.com/zinovik/image/upload/v1557849320/hedgehogs/2014.04.24_010_Polatsk._Lena.jpg',
    },
    {
      where: ['Mensk', 'Minsk', 'Менск', 'Мiнск', 'Минск'],
      who: 'Lena',
      when: '2014.04.25',
      url: 'https://res.cloudinary.com/zinovik/image/upload/v1557849321/hedgehogs/2014.04.25_011_Mensk._Lena.jpg',
    },
    {
      where: ['Brest', 'Брест', 'Брэст'],
      who: 'Lena',
      when: '2014.06.XX',
      url: 'https://res.cloudinary.com/zinovik/image/upload/v1557849321/hedgehogs/2014.06.XX_012_Brest._Lena.jpg',
    },
    {
      where: ['Brest', 'Брест', 'Брэст'],
      who: 'Max',
      when: '2014.06.XX',
      url: 'https://res.cloudinary.com/zinovik/image/upload/v1557849316/hedgehogs/2014.06.XX_013_Brest._Max.jpg',
    },
    {
      where: ['Rechytsa', 'Речыца', 'Речица'],
      who: 'Max',
      when: '2014.08.18',
      url: 'https://res.cloudinary.com/zinovik/image/upload/v1557849316/hedgehogs/2014.08.18_014_Rechytsa._Max.jpg',
    },
    {
      where: ['Brest', 'Брест', 'Брэст'],
      who: 'Lena',
      when: '2014.08.ХХ',
      url: 'https://res.cloudinary.com/zinovik/image/upload/v1557849317/hedgehogs/2014.08.XX_015_Brest._Lena.jpg',
    },
    {
      where: ['Hrodna', 'Grodno', 'Гродно'],
      who: 'Lena',
      when: '2014.09.0X',
      url: 'https://res.cloudinary.com/zinovik/image/upload/v1557849316/hedgehogs/2014.09.0X_016_Hrodna._Lena.jpg',
    },
    {
      where: ['Moscow', 'Moskva', 'Москва'],
      who: 'Vitalik',
      when: '2015.01.02',
      url: 'https://res.cloudinary.com/zinovik/image/upload/v1557849318/hedgehogs/2015.01.02_017_Moscow._Vitalik.jpg',
    },
    {
      where: ['Biala Podlaska', 'Бяла-Подляска'],
      who: 'Max',
      when: '2015.01.31',
      url: 'https://res.cloudinary.com/zinovik/image/upload/v1557849319/hedgehogs/2015.01.31_018_Biala_Podlaska._Max.jpg',
    },
    {
      where: ['Brest', 'Брест', 'Брэст'],
      who: 'Max',
      when: '2015.02.14',
      url: 'https://res.cloudinary.com/zinovik/image/upload/v1557849319/hedgehogs/2015.02.14_019_Brest._Max.jpg',
    },
    {
      where: ['Brest', 'Брест', 'Брэст'],
      who: 'Max',
      when: '2015.03.08',
      url: 'https://res.cloudinary.com/zinovik/image/upload/v1557849320/hedgehogs/2015.03.08_020_Brest._Max.jpg',
    },
    {
      where: ['Terespol', 'Тересполь'],
      who: 'Max',
      when: '2015.03.30',
      url: 'https://res.cloudinary.com/zinovik/image/upload/v1557849320/hedgehogs/2015.03.30_021_Terespol._Max.jpg',
    },
    {
      where: ['Moscow', 'Moskva', 'Москва'],
      who: 'Lena',
      when: '2015.04.24',
      url: 'https://res.cloudinary.com/zinovik/image/upload/v1557849321/hedgehogs/2015.04.24_022_Moscow._Lena.jpg',
    },
    {
      where: ['Oberhof', 'Оберхоф'],
      who: 'Irka',
      when: '2015.04.28',
      url: 'https://res.cloudinary.com/zinovik/image/upload/v1557849321/hedgehogs/2015.04.28_023_Oberhof._Irka.jpg',
    },
    {
      where: ['Brest', 'Брест', 'Брэст'],
      who: 'Hristina',
      when: '2015.05.23',
      url: 'https://res.cloudinary.com/zinovik/image/upload/v1557849321/hedgehogs/2015.05.23_024_Brest._Hristina.jpg',
    },
    {
      where: ['Brest', 'Брест', 'Брэст'],
      who: 'Max',
      when: '2015.05.24',
      url: 'https://res.cloudinary.com/zinovik/image/upload/v1557849322/hedgehogs/2015.05.24_025_Brest._Max.jpg',
    },
    {
      where: ['Krakow', 'Краков'],
      who: 'Lena',
      when: '2015.06.14',
      url: 'https://res.cloudinary.com/zinovik/image/upload/v1557849322/hedgehogs/2015.06.14_026_Krakow._Lena.jpg',
    },
    {
      where: ['Dudutki', 'Дудуткi', 'Дудутки'],
      who: 'Lena',
      when: '2015.06.20',
      url: 'https://res.cloudinary.com/zinovik/image/upload/v1557849322/hedgehogs/2015.06.20_027_Dudutki._Lena.jpg',
    },
    {
      where: ['Vilnius', 'Вильнюс'],
      who: 'Lena',
      when: '2015.08.15',
      url: 'https://res.cloudinary.com/zinovik/image/upload/v1557849323/hedgehogs/2015.08.15_028_Vilnius._Lena.jpg',
    },
    {
      where: ['Trakai', 'Тракай'],
      who: 'Lena',
      when: '2015.08.16',
      url: 'https://res.cloudinary.com/zinovik/image/upload/v1557849323/hedgehogs/2015.08.16_029_Trakai._Lena.jpg',
    },
    {
      where: ['Saint Petersburg', 'Санкт-Петербург', 'Питер'],
      who: 'Roma and Lena',
      when: '2015.08.29',
      url: 'https://res.cloudinary.com/zinovik/image/upload/v1557849323/hedgehogs/2015.08.29_030_Saint_Petersburg._Roma_and_Lena.jpg',
    },
    {
      where: ['Praha 1', 'Praga 1', 'Прага 1'],
      who: 'Lena',
      when: '2015.12.31',
      url: 'https://res.cloudinary.com/zinovik/image/upload/v1557849324/hedgehogs/2015.12.31_031_Praha_1._Lena.jpg',
    },
    {
      where: ['Praha 2', 'Praga 2', 'Прага 2'],
      who: 'Lena',
      when: '2015.12.31',
      url: 'https://res.cloudinary.com/zinovik/image/upload/v1557849324/hedgehogs/2015.12.31_032_Praha_2._Lena.jpg',
    },
    {
      where: ['Warszawa', 'Warsaw', 'Варшава'],
      who: 'Lena',
      when: '2016.02.13',
      url: 'https://res.cloudinary.com/zinovik/image/upload/v1557849324/hedgehogs/2016.02.13_033_Warszawa._Lena.jpg',
    },
    {
      where: ['Gdansk', 'Гданьск'],
      who: 'Lena',
      when: '2016.02.14',
      url: 'https://res.cloudinary.com/zinovik/image/upload/v1557849324/hedgehogs/2016.02.14_034_Gdansk._Lena.jpg',
    },
    {
      where: ['Gdynia', 'Гдыня'],
      who: 'Lena',
      when: '2016.02.14',
      url: 'https://res.cloudinary.com/zinovik/image/upload/v1557849324/hedgehogs/2016.02.14_035_Gdynia._Lena.jpg',
    },
    {
      where: ['Brest', 'Брест', 'Брэст'],
      who: 'Kirill',
      when: '2016.02.19',
      url: 'https://res.cloudinary.com/zinovik/image/upload/v1557849325/hedgehogs/2016.02.19_036_Brest._Kirill.jpg',
    },
    {
      where: ['Kamarova', 'Komarovo', 'Камарова', 'Комарово'],
      who: 'Lena',
      when: '2016.06.25',
      url: 'https://res.cloudinary.com/zinovik/image/upload/v1557849325/hedgehogs/2016.06.25_037_Kamarova._Lena.jpg',
    },
    {
      where: ['Kyiv', 'Kiev', 'Кыiв', 'Киев'],
      who: 'Lena',
      when: '2016.07.10',
      url: 'https://res.cloudinary.com/zinovik/image/upload/v1557849327/hedgehogs/2016.07.10_038_Kyiv._Lena.jpg',
    },
    {
      where: ['Canada', 'Канада'],
      who: 'Andrey',
      when: '2016.07.12',
      url: 'https://res.cloudinary.com/zinovik/image/upload/v1557849326/hedgehogs/2016.07.12_039_Canada._Andrey.jpg',
    },
    {
      where: ['Odesa', 'Odessa', 'Одеса', 'Одесса'],
      who: 'Max',
      when: '2016.07.17',
      url: 'https://res.cloudinary.com/zinovik/image/upload/v1557849327/hedgehogs/2016.07.17_040_Odesa._Max.jpg',
    },
    {
      where: ['Brest', 'Брест', 'Брэст'],
      who: 'Max',
      when: '2016.10.29',
      url: 'https://res.cloudinary.com/zinovik/image/upload/v1557849328/hedgehogs/2016.10.29_041_Brest._Max.jpg',
    },
    {
      where: ['Munchen', 'Мюнхен'],
      who: 'Sashka',
      when: '2016.12.27',
      url: 'https://res.cloudinary.com/zinovik/image/upload/v1557849328/hedgehogs/2016.12.27_042_Munchen._Sashka.jpg',
    },
    {
      where: ['Uzhgorod', 'Ужгород'],
      who: 'Lena',
      when: '2017.01.01',
      url: 'https://res.cloudinary.com/zinovik/image/upload/v1557849328/hedgehogs/2017.01.01_043_Uzhgorod._Lena.jpg',
    },
    {
      where: ['Lviv', 'Lvov', 'Львов', 'Львiв'],
      who: 'Lena',
      when: '2017.01.02',
      url: 'https://res.cloudinary.com/zinovik/image/upload/v1557849328/hedgehogs/2017.01.02_044_Lviv._Lena.jpg',
    },
    {
      where: ['Watsonville', 'Уотсонвилл'],
      who: 'Sandra',
      when: '2017.01.11',
      url: 'https://res.cloudinary.com/zinovik/image/upload/v1557849329/hedgehogs/2017.01.11_045_Watsonville._Sandra.jpg',
    },
    {
      where: ['Brest', 'Брест', 'Брэст'],
      who: 'Natashka',
      when: '2017.01.20',
      url: 'https://res.cloudinary.com/zinovik/image/upload/v1557849329/hedgehogs/2017.01.20_046_Brest._Natashka.jpg',
    },
    {
      where: ['Bukovel', 'Буковель'],
      who: 'Lena',
      when: '2017.02.16',
      url: 'https://res.cloudinary.com/zinovik/image/upload/v1557849330/hedgehogs/2017.02.16_047_Bukovel._Lena.jpg',
    },
    {
      where: ['Saint Petersburg'],
      who: 'Lena',
      when: '2017.06.26',
      url: 'https://res.cloudinary.com/zinovik/image/upload/v1557849330/hedgehogs/2017.06.26_048_Saint_Petersburg._Lena.jpg',
    },
    {
      where: ['Aarhus'],
      who: 'Irka',
      when: '2017.09.30',
      url: 'https://res.cloudinary.com/zinovik/image/upload/v1557849332/hedgehogs/2017.09.30_049_Aarhus._Irka.jpg',
    },
    {
      where: ['Brest', 'Брест', 'Брэст'],
      who: 'Santa Claus',
      when: '2018.01.01',
      url: 'https://res.cloudinary.com/zinovik/image/upload/v1557849330/hedgehogs/2018.01.01_050_Brest._Santa_Claus.jpg',
    },
    {
      where: ['Vilnius', 'Вильнюс'],
      who: 'Vitalik',
      when: '2018.01.27',
      url: 'https://res.cloudinary.com/zinovik/image/upload/v1557849331/hedgehogs/2018.01.27_051_Vilnius._Vitalik.jpg',
    },
    {
      where: ['Bukovel', 'Буковель'],
      who: 'Lena',
      when: '2018.01.31',
      url: 'https://res.cloudinary.com/zinovik/image/upload/v1557849331/hedgehogs/2018.01.31_052_Bukovel._Lena.jpg',
    },
    {
      where: ['Trier'],
      who: 'Natasha',
      when: '2018.05.05',
      url: 'https://res.cloudinary.com/zinovik/image/upload/v1557849332/hedgehogs/2018.05.05_053_Trier._Natasha.jpg',
    },
    {
      where: ['Pinsk', 'Пинск'],
      who: 'Lena',
      when: '2018.08.12',
      url: 'https://res.cloudinary.com/zinovik/image/upload/v1557849333/hedgehogs/2018.08.12_054_Pinsk._Lena.jpg',
    },
    {
      where: ['Warszawa', 'Warsaw', 'Варшава'],
      who: 'Sergey and Masha',
      when: '2018.09.20',
      url: 'https://res.cloudinary.com/zinovik/image/upload/v1557849333/hedgehogs/2018.09.20_055_Warsaw._Sergey_and_Masha.jpg',
    },
    {
      where: ['Harelbeke'],
      who: 'Artur',
      when: '2018.10.16',
      url: 'https://res.cloudinary.com/zinovik/image/upload/v1557849332/hedgehogs/2018.10.16_056_Harelbeke._Artur.jpg',
    },
    {
      where: ['Riga', 'Рига'],
      who: 'Lena',
      when: '2018.11.17',
      url: 'https://res.cloudinary.com/zinovik/image/upload/v1557849333/hedgehogs/2018.11.17_057_Riga._Lena.jpg',
    },
    {
      where: ['Vienna', 'Вена'],
      who: 'Lena',
      when: '2018.12.31',
      url: 'https://res.cloudinary.com/zinovik/image/upload/v1557849337/hedgehogs/2018.12.31_058_Vienna._Lena.jpg',
    },
    {
      where: ['Budapest', 'Будапешт'],
      who: 'Lena',
      when: '2019.01.01',
      url: 'https://res.cloudinary.com/zinovik/image/upload/v1557849334/hedgehogs/2019.01.01_059_Budapest._Lena.jpg',
    },
    {
      where: ['Yaremche', 'Яремче'],
      who: 'Max',
      when: '2019.05.07',
      url: 'https://res.cloudinary.com/zinovik/image/upload/v1557849335/hedgehogs/2019.05.07_060_Yaremche._Max.jpg',
    },
    {
      where: ['Svityaz', 'Свитязь', 'Свiтязь', 'Hryada', 'Гряда'],
      who: 'Lena',
      when: '2019.07.14',
      url: 'https://res.cloudinary.com/zinovik/image/upload/v1563211536/hedgehogs/2019.07.14_061_Svityaz._Lena.jpg',
    },
    {
      where: ['Palanga', 'Lithuania', 'Litva', 'Паланга', 'Литва'],
      who: 'Sergey and Masha',
      when: '2019.07.21',
      url: 'https://res.cloudinary.com/zinovik/image/upload/v1563774314/hedgehogs/2019.07.21_062_Palanga._Sergey_and_Masha.jpg',
    },
  ];

  async getAllHedgehogs(): Promise<IHedgehog[]> {
    let hedgehogNumber = 1;

    return this.mockHedgehogs.map(mockHedgehog => {
      return {
        ...mockHedgehog,
        hedgehogNumber: hedgehogNumber++,
      };
    });
  }
}
