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


export const navItemsEmploye: INavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'icon-speedometer',
   
  },
  
  {
    title: true,
    name: 'Devices'
  },
  {
    name: 'Device',
    url: '/dashboard/devices',
    icon: 'icon-cursor',
    children: [
      {
        name: 'Add Device',
        url: '/dashboard/devices/add',
        icon: 'icon-cursor'
      },
    
    ]
  },
  {
    name: 'Inventsion',
    url: '/dashboard/inventsions',
    icon: 'icon-cursor',
    children: [
      {
        name: 'Add Inventsion',
        url: '/dashboard/inventsions/add',
        icon: 'icon-add'
      },
    
    ]
  },

  
];

export const navItemsClient: INavData[] = [
 
 
  {
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'icon-speedometer',
   
  }
 
 
  

  
];