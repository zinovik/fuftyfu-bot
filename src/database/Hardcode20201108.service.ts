import { IDatabaseService } from './IDatabaseService.interface';
import { IHedgehog } from '../common/model/IHedgehog.interface';

export class Hardcode20201108 implements IDatabaseService {
  mockHedgehogs = [
    {
      where: ['Brest', 'Брест', 'Брэст', 'Belarus', 'Беларусь'],
      who: 'Natasha and Tanja',
      when: '2013.05.XX',
      url: 'https://res.cloudinary.com/zinovik/image/upload/v1557849316/hedgehogs/2013.05.XX_001_Brest._Natasha_and_Tanja.jpg',
    },
    {
      where: ['Lviv', 'Lvov', 'Львов', 'Львiв', 'Ukraine', 'Украина'],
      who: 'Max',
      when: '2013.07.29',
      url: 'https://res.cloudinary.com/zinovik/image/upload/v1557849317/hedgehogs/2013.07.29_002_Lviv._Max.jpg',
    },
    {
      where: ['Krym', 'Крым', 'Ukraine', 'Украина'],
      who: 'Roma and Lena',
      when: '2013.08.XX',
      url: 'https://res.cloudinary.com/zinovik/image/upload/v1557849317/hedgehogs/2013.08.XX_003_Krym._Roma_and_Lena.jpg',
    },
    {
      where: ['Nyasvizh', 'Nesvizh', 'Нясвiж', 'Несвиж', 'Belarus', 'Беларусь'],
      who: 'Roma and Lena',
      when: '2013.10.XX',
      url: 'https://res.cloudinary.com/zinovik/image/upload/v1557849317/hedgehogs/2013.10.XX_004_Nyasvizh._Roma_and_Lena.jpg',
    },
    {
      where: ['Brest', 'Брест', 'Брэст', 'Belarus', 'Беларусь'],
      who: 'Roma and Lena',
      when: '2014.01.XX',
      url: 'https://res.cloudinary.com/zinovik/image/upload/v1557849317/hedgehogs/2014.01.XX_005_Brest._Roma_and_Lena.jpg',
    },
    {
      where: ['Mir', 'Мiр', 'Мир', 'Belarus', 'Беларусь'],
      who: 'Lena',
      when: '2014.04.12',
      url: 'https://res.cloudinary.com/zinovik/image/upload/v1557849319/hedgehogs/2014.04.12_006_Mir._Lena.jpg',
    },
    {
      where: ['Nyasvizh & Mir 1', 'Nesvizh & Mir 1', 'Нясвiж & Мiр', 'Несвиж и Мир', 'Belarus', 'Беларусь'],
      who: 'Lena',
      when: '2014.04.12',
      url: 'https://res.cloudinary.com/zinovik/image/upload/v1557849318/hedgehogs/2014.04.12_007_Nyasvizh_Mir_1._Lena.jpg',
    },
    {
      where: ['Nyasvizh & Mir 1', 'Nesvizh & Mir 1', 'Нясвiж & Мiр', 'Несвиж и Мир', 'Belarus', 'Беларусь'],
      who: 'Lena',
      when: '2014.04.12',
      url: 'https://res.cloudinary.com/zinovik/image/upload/v1557849318/hedgehogs/2014.04.12_008_Nyasvizh_Mir_2._Lena.jpg',
    },
    {
      where: ['Hrodna', 'Grodno', 'Гродно', 'Гродна', 'Belarus', 'Беларусь'],
      who: 'Lena',
      when: '2014.04.22',
      url: 'https://res.cloudinary.com/zinovik/image/upload/v1557849320/hedgehogs/2014.04.22_009_Hrodna._Lena.jpg',
    },
    {
      where: ['Polatsk', 'Polotsk', 'Полацк', 'Полоцк', 'Belarus', 'Беларусь'],
      who: 'Lena',
      when: '2014.04.24',
      url: 'https://res.cloudinary.com/zinovik/image/upload/v1557849320/hedgehogs/2014.04.24_010_Polatsk._Lena.jpg',
    },
    {
      where: ['Mensk', 'Minsk', 'Менск', 'Мiнск', 'Минск', 'Belarus', 'Беларусь'],
      who: 'Lena',
      when: '2014.04.25',
      url: 'https://res.cloudinary.com/zinovik/image/upload/v1557849321/hedgehogs/2014.04.25_011_Mensk._Lena.jpg',
    },
    {
      where: ['Brest', 'Брест', 'Брэст', 'Belarus', 'Беларусь'],
      who: 'Lena',
      when: '2014.06.XX',
      url: 'https://res.cloudinary.com/zinovik/image/upload/v1557849321/hedgehogs/2014.06.XX_012_Brest._Lena.jpg',
    },
    {
      where: ['Brest', 'Брест', 'Брэст', 'Belarus', 'Беларусь'],
      who: 'Max',
      when: '2014.06.XX',
      url: 'https://res.cloudinary.com/zinovik/image/upload/v1557849316/hedgehogs/2014.06.XX_013_Brest._Max.jpg',
    },
    {
      where: ['Rechytsa', 'Речыца', 'Речица', 'Belarus', 'Беларусь'],
      who: 'Max',
      when: '2014.08.18',
      url: 'https://res.cloudinary.com/zinovik/image/upload/v1557849316/hedgehogs/2014.08.18_014_Rechytsa._Max.jpg',
    },
    {
      where: ['Brest', 'Брест', 'Брэст', 'Belarus', 'Беларусь'],
      who: 'Lena',
      when: '2014.08.ХХ',
      url: 'https://res.cloudinary.com/zinovik/image/upload/v1557849317/hedgehogs/2014.08.XX_015_Brest._Lena.jpg',
    },
    {
      where: ['Hrodna', 'Grodno', 'Гродно', 'Гродна', 'Belarus', 'Беларусь'],
      who: 'Lena',
      when: '2014.09.0X',
      url: 'https://res.cloudinary.com/zinovik/image/upload/v1557849316/hedgehogs/2014.09.0X_016_Hrodna._Lena.jpg',
    },
    {
      where: ['Moscow', 'Moskva', 'Москва', 'Russia', 'Россия'],
      who: 'Vitalik',
      when: '2015.01.02',
      url: 'https://res.cloudinary.com/zinovik/image/upload/v1557849318/hedgehogs/2015.01.02_017_Moscow._Vitalik.jpg',
    },
    {
      where: ['Biala Podlaska', 'Бяла-Подляска', 'Poland', 'Польша'],
      who: 'Max',
      when: '2015.01.31',
      url: 'https://res.cloudinary.com/zinovik/image/upload/v1557849319/hedgehogs/2015.01.31_018_Biala_Podlaska._Max.jpg',
    },
    {
      where: ['Brest', 'Брест', 'Брэст', 'Belarus', 'Беларусь'],
      who: 'Max',
      when: '2015.02.14',
      url: 'https://res.cloudinary.com/zinovik/image/upload/v1557849319/hedgehogs/2015.02.14_019_Brest._Max.jpg',
    },
    {
      where: ['Brest', 'Брест', 'Брэст', 'Belarus', 'Беларусь'],
      who: 'Max',
      when: '2015.03.08',
      url: 'https://res.cloudinary.com/zinovik/image/upload/v1557849320/hedgehogs/2015.03.08_020_Brest._Max.jpg',
    },
    {
      where: ['Terespol', 'Тересполь', 'Poland', 'Польша'],
      who: 'Max',
      when: '2015.03.30',
      url: 'https://res.cloudinary.com/zinovik/image/upload/v1557849320/hedgehogs/2015.03.30_021_Terespol._Max.jpg',
    },
    {
      where: ['Moscow', 'Moskva', 'Москва', 'Russia', 'Россия'],
      who: 'Lena',
      when: '2015.04.24',
      url: 'https://res.cloudinary.com/zinovik/image/upload/v1557849321/hedgehogs/2015.04.24_022_Moscow._Lena.jpg',
    },
    {
      where: ['Oberhof', 'Оберхоф', 'Germany', 'Германия'],
      who: 'Irka',
      when: '2015.04.28',
      url: 'https://res.cloudinary.com/zinovik/image/upload/v1557849321/hedgehogs/2015.04.28_023_Oberhof._Irka.jpg',
    },
    {
      where: ['Brest', 'Брест', 'Брэст', 'Belarus', 'Беларусь'],
      who: 'Hristina',
      when: '2015.05.23',
      url: 'https://res.cloudinary.com/zinovik/image/upload/v1557849321/hedgehogs/2015.05.23_024_Brest._Hristina.jpg',
    },
    {
      where: ['Brest', 'Брест', 'Брэст', 'Belarus', 'Беларусь'],
      who: 'Max',
      when: '2015.05.24',
      url: 'https://res.cloudinary.com/zinovik/image/upload/v1557849322/hedgehogs/2015.05.24_025_Brest._Max.jpg',
    },
    {
      where: ['Krakow', 'Краков', 'Poland', 'Польша'],
      who: 'Lena',
      when: '2015.06.14',
      url: 'https://res.cloudinary.com/zinovik/image/upload/v1557849322/hedgehogs/2015.06.14_026_Krakow._Lena.jpg',
    },
    {
      where: ['Dudutki', 'Дудуткi', 'Дудутки', 'Belarus', 'Беларусь'],
      who: 'Lena',
      when: '2015.06.20',
      url: 'https://res.cloudinary.com/zinovik/image/upload/v1557849322/hedgehogs/2015.06.20_027_Dudutki._Lena.jpg',
    },
    {
      where: ['Vilnius', 'Вильнюс', 'Lithuania', 'Litva', 'Литва'],
      who: 'Lena',
      when: '2015.08.15',
      url: 'https://res.cloudinary.com/zinovik/image/upload/v1557849323/hedgehogs/2015.08.15_028_Vilnius._Lena.jpg',
    },
    {
      where: ['Trakai', 'Тракай', 'Lithuania', 'Litva', 'Литва'],
      who: 'Lena',
      when: '2015.08.16',
      url: 'https://res.cloudinary.com/zinovik/image/upload/v1557849323/hedgehogs/2015.08.16_029_Trakai._Lena.jpg',
    },
    {
      where: ['Saint Petersburg', 'Санкт-Петербург', 'Питер', 'Russia', 'Россия'],
      who: 'Roma and Lena',
      when: '2015.08.29',
      url: 'https://res.cloudinary.com/zinovik/image/upload/v1557849323/hedgehogs/2015.08.29_030_Saint_Petersburg._Roma_and_Lena.jpg',
    },
    {
      where: ['Praha 1', 'Praga 1', 'Прага 1', 'Czech Republic', 'Чехия'],
      who: 'Lena',
      when: '2015.12.31',
      url: 'https://res.cloudinary.com/zinovik/image/upload/v1557849324/hedgehogs/2015.12.31_031_Praha_1._Lena.jpg',
    },
    {
      where: ['Praha 2', 'Praga 2', 'Прага 2', 'Czech Republic', 'Чехия'],
      who: 'Lena',
      when: '2015.12.31',
      url: 'https://res.cloudinary.com/zinovik/image/upload/v1557849324/hedgehogs/2015.12.31_032_Praha_2._Lena.jpg',
    },
    {
      where: ['Warszawa', 'Warsaw', 'Варшава', 'Poland', 'Польша'],
      who: 'Lena',
      when: '2016.02.13',
      url: 'https://res.cloudinary.com/zinovik/image/upload/v1557849324/hedgehogs/2016.02.13_033_Warszawa._Lena.jpg',
    },
    {
      where: ['Gdansk', 'Гданьск', 'Poland', 'Польша'],
      who: 'Lena',
      when: '2016.02.14',
      url: 'https://res.cloudinary.com/zinovik/image/upload/v1557849324/hedgehogs/2016.02.14_034_Gdansk._Lena.jpg',
    },
    {
      where: ['Gdynia', 'Гдыня', 'Poland', 'Польша'],
      who: 'Lena',
      when: '2016.02.14',
      url: 'https://res.cloudinary.com/zinovik/image/upload/v1557849324/hedgehogs/2016.02.14_035_Gdynia._Lena.jpg',
    },
    {
      where: ['Brest', 'Брест', 'Брэст', 'Belarus', 'Беларусь'],
      who: 'Kirill',
      when: '2016.02.19',
      url: 'https://res.cloudinary.com/zinovik/image/upload/v1557849325/hedgehogs/2016.02.19_036_Brest._Kirill.jpg',
    },
    {
      where: ['Kamarova', 'Komarovo', 'Камарова', 'Комарово', 'Belarus', 'Беларусь'],
      who: 'Lena',
      when: '2016.06.25',
      url: 'https://res.cloudinary.com/zinovik/image/upload/v1557849325/hedgehogs/2016.06.25_037_Kamarova._Lena.jpg',
    },
    {
      where: ['Kyiv', 'Kiev', 'Кыiв', 'Киев', 'Ukraine', 'Украина'],
      who: 'Lena',
      when: '2016.07.10',
      url: 'https://res.cloudinary.com/zinovik/image/upload/v1557849327/hedgehogs/2016.07.10_038_Kyiv._Lena.jpg',
    },
    {
      where: ['Edmonton', 'Эдмонтон', 'Canada', 'Канада'],
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
      where: ['Brest', 'Брест', 'Брэст', 'Belarus', 'Беларусь'],
      who: 'Max',
      when: '2016.10.29',
      url: 'https://res.cloudinary.com/zinovik/image/upload/v1557849328/hedgehogs/2016.10.29_041_Brest._Max.jpg',
    },
    {
      where: ['Munchen', 'Мюнхен', 'Germany', 'Германия'],
      who: 'Sashka',
      when: '2016.12.27',
      url: 'https://res.cloudinary.com/zinovik/image/upload/v1557849328/hedgehogs/2016.12.27_042_Munchen._Sashka.jpg',
    },
    {
      where: ['Uzhgorod', 'Ужгород', 'Ukraine', 'Украина'],
      who: 'Lena',
      when: '2017.01.01',
      url: 'https://res.cloudinary.com/zinovik/image/upload/v1557849328/hedgehogs/2017.01.01_043_Uzhgorod._Lena.jpg',
    },
    {
      where: ['Lviv', 'Lvov', 'Львов', 'Львiв', 'Ukraine', 'Украина'],
      who: 'Lena',
      when: '2017.01.02',
      url: 'https://res.cloudinary.com/zinovik/image/upload/v1557849328/hedgehogs/2017.01.02_044_Lviv._Lena.jpg',
    },
    {
      where: ['Watsonville', 'Уотсонвилл', 'USA', 'США', 'America', 'Америка'],
      who: 'Sandra',
      when: '2017.01.11',
      url: 'https://res.cloudinary.com/zinovik/image/upload/v1557849329/hedgehogs/2017.01.11_045_Watsonville._Sandra.jpg',
    },
    {
      where: ['Brest', 'Брест', 'Брэст', 'Belarus', 'Беларусь'],
      who: 'Natashka',
      when: '2017.01.20',
      url: 'https://res.cloudinary.com/zinovik/image/upload/v1557849329/hedgehogs/2017.01.20_046_Brest._Natashka.jpg',
    },
    {
      where: ['Bukovel', 'Буковель', 'Ukraine', 'Украина'],
      who: 'Lena',
      when: '2017.02.16',
      url: 'https://res.cloudinary.com/zinovik/image/upload/v1557849330/hedgehogs/2017.02.16_047_Bukovel._Lena.jpg',
    },
    {
      where: ['Saint Petersburg', 'Санкт-Петербург', 'Питер', 'Russia', 'Россия'],
      who: 'Lena',
      when: '2017.06.26',
      url: 'https://res.cloudinary.com/zinovik/image/upload/v1557849330/hedgehogs/2017.06.26_048_Saint_Petersburg._Lena.jpg',
    },
    {
      where: ['Aarhus', 'Denmark', 'Дания'],
      who: 'Irka',
      when: '2017.09.30',
      url: 'https://res.cloudinary.com/zinovik/image/upload/v1557849332/hedgehogs/2017.09.30_049_Aarhus._Irka.jpg',
    },
    {
      where: ['Brest', 'Брест', 'Брэст', 'Belarus', 'Беларусь'],
      who: 'Santa Claus',
      when: '2018.01.01',
      url: 'https://res.cloudinary.com/zinovik/image/upload/v1557849330/hedgehogs/2018.01.01_050_Brest._Santa_Claus.jpg',
    },
    {
      where: ['Vilnius', 'Вильнюс', 'Lithuania', 'Litva', 'Литва'],
      who: 'Vitalik',
      when: '2018.01.27',
      url: 'https://res.cloudinary.com/zinovik/image/upload/v1557849331/hedgehogs/2018.01.27_051_Vilnius._Vitalik.jpg',
    },
    {
      where: ['Bukovel', 'Буковель', 'Ukraine', 'Украина'],
      who: 'Lena',
      when: '2018.01.31',
      url: 'https://res.cloudinary.com/zinovik/image/upload/v1557849331/hedgehogs/2018.01.31_052_Bukovel._Lena.jpg',
    },
    {
      where: ['Trier', 'Трир', 'Germany', 'Германия'],
      who: 'Natasha',
      when: '2018.05.05',
      url: 'https://res.cloudinary.com/zinovik/image/upload/v1557849332/hedgehogs/2018.05.05_053_Trier._Natasha.jpg',
    },
    {
      where: ['Pinsk', 'Пинск', 'Belarus', 'Беларусь'],
      who: 'Lena',
      when: '2018.08.12',
      url: 'https://res.cloudinary.com/zinovik/image/upload/v1557849333/hedgehogs/2018.08.12_054_Pinsk._Lena.jpg',
    },
    {
      where: ['Warszawa', 'Warsaw', 'Варшава', 'Poland', 'Польша'],
      who: 'Sergey and Masha',
      when: '2018.09.20',
      url: 'https://res.cloudinary.com/zinovik/image/upload/v1557849333/hedgehogs/2018.09.20_055_Warsaw._Sergey_and_Masha.jpg',
    },
    {
      where: ['Harelbeke', 'Belgium', 'Бельгия'],
      who: 'Artur',
      when: '2018.10.16',
      url: 'https://res.cloudinary.com/zinovik/image/upload/v1557849332/hedgehogs/2018.10.16_056_Harelbeke._Artur.jpg',
    },
    {
      where: ['Riga', 'Рига', 'Latvia', 'Латвия'],
      who: 'Lena',
      when: '2018.11.17',
      url: 'https://res.cloudinary.com/zinovik/image/upload/v1557849333/hedgehogs/2018.11.17_057_Riga._Lena.jpg',
    },
    {
      where: ['Vienna', 'Вена', 'Austria', 'Австрия'],
      who: 'Lena',
      when: '2018.12.31',
      url: 'https://res.cloudinary.com/zinovik/image/upload/v1557849337/hedgehogs/2018.12.31_058_Vienna._Lena.jpg',
    },
    {
      where: ['Budapest', 'Будапешт', 'Hungary', 'Венгрия'],
      who: 'Lena',
      when: '2019.01.01',
      url: 'https://res.cloudinary.com/zinovik/image/upload/v1557849334/hedgehogs/2019.01.01_059_Budapest._Lena.jpg',
    },
    {
      where: ['Yaremche', 'Яремче', 'Ukraine', 'Украина'],
      who: 'Max',
      when: '2019.05.07',
      url: 'https://res.cloudinary.com/zinovik/image/upload/v1557849335/hedgehogs/2019.05.07_060_Yaremche._Max.jpg',
    },
    {
      where: ['Svityaz', 'Свитязь', 'Свiтязь', 'Hryada', 'Гряда', 'Ukraine', 'Украина'],
      who: 'Lena',
      when: '2019.07.14',
      url: 'https://res.cloudinary.com/zinovik/image/upload/v1563211536/hedgehogs/2019.07.14_061_Svityaz._Lena.jpg',
    },
    {
      where: ['Palanga', 'Паланга', 'Lithuania', 'Litva', 'Литва'],
      who: 'Sergey and Masha',
      when: '2019.07.21',
      url: 'https://res.cloudinary.com/zinovik/image/upload/v1563774314/hedgehogs/2019.07.21_062_Palanga._Sergey_and_Masha.jpg',
    },
    {
      where: ['Kamianets-Podilskyi', 'Kamieniec Podolski', "Кам'янець-Подiльський", 'Каменец-Подольский'],
      who: 'Lena',
      when: '2019.08.03',
      url: 'https://res.cloudinary.com/zinovik/image/upload/v1565067796/hedgehogs/2019.08.03_063_Kamianets-Podilskyi._Lena.jpg',
    },
    {
      where: ['Belovezhskaya Pushcha', 'Belavezhskaya Pushcha', 'Беловежская пуща', 'Белавежская пуща'],
      who: 'Lena',
      when: '2019.08.17',
      url: 'https://res.cloudinary.com/zinovik/image/upload/v1566155641/hedgehogs/2019.08.18_064_Belovezhskaya_Pushcha._Lena.jpg',
    },
    {
      where: ['Vesuvius', 'Везувий', 'volcano', 'вулкан', 'Italy', 'Италия'],
      who: 'Lena',
      when: '2019.10.08',
      url: 'https://res.cloudinary.com/zinovik/image/upload/v1570953719/hedgehogs/2019.10.08_065_Mount_Vesuvius._Lena.jpg',
    },
    {
      where: ['Stockholm', 'Стокгольм', 'Sweden', 'Швеция'],
      who: 'Lena',
      when: '2019.11.09',
      url: 'https://res.cloudinary.com/zinovik/image/upload/v1573562629/hedgehogs/2019.11.09_066_Stockholm._Lena.jpg',
    },
    {
      where: ['Venice', 'Венеция', 'Juliano', 'Джулиано', 'Italy', 'Италия'],
      who: 'Natasha',
      when: '2020.01.10',
      url: 'https://res.cloudinary.com/zinovik/image/upload/v1578827227/hedgehogs/2020.01.10_067_Venice-Juliano._Natasha.jpg',
    },
    {
      where: ['Hand made', 'Сделан сам'],
      who: 'Lena',
      when: '2020.04.01',
      url: 'https://res.cloudinary.com/zinovik/image/upload/v1585816370/hedgehogs/2020.04.01_068_Hand_Made._Lena.jpg',
    },
    {
      where: ['Sula', 'Сула', 'Belarus', 'Беларусь'],
      who: 'Lena',
      when: '2020.05.01',
      url: 'https://res.cloudinary.com/zinovik/image/upload/v1588524953/hedgehogs/2020.05.01_069_Sula._Lena.jpg',
    },
    {
      where: ['Kamieniec', 'Kamenec', 'Камянец', 'Каменец', 'Belarus', 'Беларусь'],
      who: 'Lena',
      when: '2020.07.04',
      url: 'https://res.cloudinary.com/zinovik/image/upload/v1593953186/hedgehogs/2020.07.04_070_Kamieniec._Lena.jpg',
    },
    {
      where: ['Wildberries', 'Brest', 'Брест', 'Брэст', 'Belarus', 'Беларусь'],
      who: 'Lena',
      when: '2020.10.23',
      url: 'https://res.cloudinary.com/zinovik/image/upload/v1603620988/hedgehogs/2020.10.23_071_Wildberries._Lena.jpg',
    },
    {
      where: ['Tsum', 'ЦУМ', 'Brest', 'Брест', 'Брэст', 'Belarus', 'Беларусь'],
      who: 'Lena',
      when: '2020.11.08',
      url: 'https://res.cloudinary.com/zinovik/image/upload/v1604839317/hedgehogs/2020.11.08_072_Tsum._Lena.jpg',
    },
  ];

  async getAllHedgehogs(): Promise<IHedgehog[]> {
    let hedgehogNumber = 1;

    return this.mockHedgehogs.map((mockHedgehog) => {
      return {
        ...mockHedgehog,
        hedgehogNumber: hedgehogNumber++,
      };
    });
  }
}
