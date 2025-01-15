import { Injectable } from '@angular/core';
import { Food } from '../../shared/models/Food';
import { Tag } from '../../shared/models/Tag';
import foodList from '../../../assets/foodList/foodList.json'
@Injectable({
  providedIn: 'root',
})
export class FoodService {
  constructor() {}

  getAllTags(): Tag[] {
    return [
      { name: 'All', count: 24 },
      { name: 'FastFood', count: 4 },
      { name: 'Pizza', count: 2 },
      { name: 'Lunch', count: 3 },
      { name: 'SlowFood', count: 2 },
      { name: 'Hamburger', count: 1 },
      { name: 'Fry', count: 1 },
      { name: 'Soup', count: 3 },
      { name: 'Seafood', count: 3 },
      { name: 'Dinner', count: 7 },
      { name: 'Pasta', count: 1 },
      { name: 'Italian', count: 2 },
      { name: 'Spicy', count: 2 },
      { name: 'Mexican', count: 1 },
      { name: 'Salad', count: 2 },
      { name: 'Healthy', count: 2 },
      { name: 'Noodles', count: 2 },
      { name: 'Thai', count: 2 },
      { name: 'Dessert', count: 2 },
      { name: 'Cake', count: 1 },
      { name: 'Breakfast', count: 1 },
      { name: 'Pastry', count: 1 },
      { name: 'French', count: 3 },
      { name: 'Grill', count: 1 },
      { name: 'American', count: 1 },
      { name: 'Rice', count: 1 },
      { name: 'Wrap', count: 1 },
      { name: 'Vegetarian', count: 1 },
    ];
  }
  

  getAllFoodsBySearchTerm(searchTerm: string): Food[] {
    return this.getAll().filter((food) =>
      food.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  getAllFoodsByTag(tag: string): Food[] {
    return tag == 'All'
      ? this.getAll()
      : this.getAll().filter((food) => food.tags?.includes(tag));
  }

  getFoodById(id: number):Food{
    return this.getAll().find(food => food.id == id)!;
  }

  getAll(): Food[] {
    return foodList;
  }
}
