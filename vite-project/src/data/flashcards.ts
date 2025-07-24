export type Flashcard = {
  category: 'animals' | 'food' | 'verbs';
  spanish: string;
  english: string;
  quiz: {
    type: 'multiple-choice';
    options: string[];
  };
};

export const flashcards: Flashcard[] = [
  // Animals
  {
    category: 'animals',
    spanish: 'el gato',
    english: 'the cat',
    quiz: {
      type: 'multiple-choice',
      options: ['the dog', 'the house', 'the cat', 'the bird'],
    },
  },
  {
    category: 'animals',
    spanish: 'el perro',
    english: 'the dog',
    quiz: {
      type: 'multiple-choice',
      options: ['the dog', 'the cat', 'the horse', 'the fish'],
    },
  },
  {
    category: 'animals',
    spanish: 'el pájaro',
    english: 'the bird',
    quiz: {
      type: 'multiple-choice',
      options: ['the bird', 'the cow', 'the cat', 'the fish'],
    },
  },
  // Food
  {
    category: 'food',
    spanish: 'la manzana',
    english: 'the apple',
    quiz: {
      type: 'multiple-choice',
      options: ['the apple', 'the bread', 'the cheese', 'the banana'],
    },
  },
  {
    category: 'food',
    spanish: 'el pan',
    english: 'the bread',
    quiz: {
      type: 'multiple-choice',
      options: ['the bread', 'the apple', 'the milk', 'the cheese'],
    },
  },
  {
    category: 'food',
    spanish: 'el queso',
    english: 'the cheese',
    quiz: {
      type: 'multiple-choice',
      options: ['the cheese', 'the bread', 'the apple', 'the banana'],
    },
  },
  // Verbs
  {
    category: 'verbs',
    spanish: 'comer',
    english: 'to eat',
    quiz: {
      type: 'multiple-choice',
      options: ['to eat', 'to drink', 'to run', 'to sleep'],
    },
  },
  {
    category: 'verbs',
    spanish: 'beber',
    english: 'to drink',
    quiz: {
      type: 'multiple-choice',
      options: ['to drink', 'to eat', 'to sleep', 'to read'],
    },
  },
  {
    category: 'verbs',
    spanish: 'dormir',
    english: 'to sleep',
    quiz: {
      type: 'multiple-choice',
      options: ['to sleep', 'to eat', 'to run', 'to drink'],
    },
  },
]; 