import { Injectable } from '@angular/core';
import { provideRoutes } from '@angular/router';
import { INavData } from '@coreui/angular';
import { User } from './services/user';


export const navItemsAdmin: INavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'icon-speedometer',
   
  },
 
  {
    name: 'Users',
    url: '/dashboard/users',
    icon: 'icon-user',
    children: [
      {
        name: 'All',
        url: '/dashboard/users',
        icon: 'icon-people'
      },
      {
        name: 'Add User',
        url: '/dashboard/users/add',
        icon: 'icon-user-follow'
      },
    
    ]
  },
 
  {
    name: 'Companies',
    url: '/dashboard/companies',
    icon: 'icon-rocket',
    children: [
      {
        name: 'All',
        url: '/dashboard/companies',
        icon: 'icon-grid'
      },
      {
        name: 'Add Companie',
        url: '/dashboard/companies/add',
        icon: 'icon-plus'
      },
    
    
    ]
  },
  {
    name: 'orders',
    url: '/dashboard/orders',
    icon: 'icon-rocket',
    children: [
      {
        name: 'All',
        url: '/dashboard/orders',
        icon: 'icon-grid'
      },
      {
        name: 'Add Order',
        url: '/dashboard/orders/add',
        icon: 'icon-plus'
      },
    
    
    ]
  },
  {
    name: 'Products',
    url: '/dashboard/products',
    icon: 'icon-rocket',
    children: [
      {
        name: 'All',
        url: '/dashboard/products',
        icon: 'icon-grid'
      },
      {
        name: 'Add Product',
        url: '/dashboard/products/add',
        icon: 'icon-plus'
      },
    
    
    ]
  },
  {
    name: 'Categories',
    url: '/dashboard/categories',
    icon: 'icon-rocket',
    children: [
      {
        name: 'All',
        url: '/dashboard/categories',
        icon: 'icon-grid'
      },
      {
        name: 'Add Product',
        url: '/dashboard/categories/add',
        icon: 'icon-plus'
      },
    
    
    ]
  },
  
  {
    name: 'Enumeration',
    url: '/dashboard/enumerations',
    icon: 'icon-wrench',
    children: [
      {
        name: 'All',
        url: '/dashboard/enumerations',
        icon: 'icon-book-open'
      },
      {
        name: 'Add Enumeration',
        url: '/dashboard/enumerations/add',
        icon: 'icon-penci'
      },
    
    ]
  },
  {
    name: 'Enumeration Value',
    url: '/dashboard/enumerations_value',
    icon: 'icon-wrench',
    children: [
      {
        name: 'All',
        url: '/dashboard/enumerations_value',
        icon: 'icon-book-open'
      },
      {
        name: 'Add Enumeration value',
        url: '/dashboard/enumerations_value/add',
        icon: 'icon-penci'
      },
    
    ]
  },
  
  
];



