import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-examples',
  templateUrl: './examples.component.html',
  styleUrls: ['./examples.component.scss']
})
export class ExamplesComponent implements OnInit {

  items = [
    { 
      english: 'Show me the money!',
      chinese: '把钱拿出来！',
      echo: 'Take out the money!'
    },
    { 
      english: 'Of all the gin joints in all the towns in all the world, she walks into mine.',
      chinese: '在全世界所有城镇的杜松子酒中，她走进我的身边。',
      echo: 'She walked into all of the gin joints of all the towns around the world.'
    },
    { 
      english: 'I live in a van down by the river.',
      chinese: '我住在河边的一辆货车里。',
      echo: 'I live in a van in the river.'
    },
    { 
      english: 'It\'s not the size of the dog in the fight, but the size of the fight in the dog that matters.',
      chinese: '这不是在战斗中的狗的大小，而是在狗的斗争的大小重要。',
      echo: 'In the battle is not the size of the dog, but the size of the dog\'s struggle is very important.'
    },
    { 
      english: 'She is vegan.',
      chinese: '她是素食主义者。',
      echo: 'She is vegetarian.'
    },
    { 
      english: 'He killed two birds with one stone.',
      chinese: '他一石二鸟杀了他。',
      echo: 'He killed him in one stone and two birds.'
    },
    { 
      english: 'He is always a day late and a dollar short.',
      chinese: '他总是迟到一美元。',
      echo: 'He is always a dollar late.'
    },
    { 
      english: 'You miss 100% of the shots you don\'t take.',
      chinese: '你错过了100％的投篮机会。',
      echo: 'You missed 100% of the shots.'
    },
    { 
      english: 'He is flying by the seat of his pants.',
      chinese: '他坐在裤子旁边。',
      echo: 'He sat next to his pants.'
    },
    { 
      english: 'The is no use crying over spilled milk.',
      chinese: '哭泣的牛奶溢出是无用的。',
      echo: 'Crying milk overflowing is useless.'
    },
    { 
      english: 'He is giving her the run around.',
      chinese: '他正在为她奔波。',
      echo: 'He is running around for her.'
    },
    { 
      english: 'I could just kick myself for saying that.',
      chinese: '我可以踢我自己这样说。',
      echo: 'I can kick myself to say that.'
    },
  ]
  constructor() { }

  ngOnInit() {
  }

}
