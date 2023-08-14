import React from 'react'

export const adminRoutes =[
    {
        path: '/admin',
        Component: AdminZone
    }

] //for admin

export const publicRoutes =[

    {
        path: '/',
        Component: Home
    },

    {
        path: '/profile/:username',
        Component: Profile
    },

    {
        path: '/register',
        Component: Auth
    },
    {
        path: '/login',
        Component: Auth
    },

    {
        path: '/record',
        Component: Record
    },

    {
        path: '/contact',
        Component: Contact
    },
    {
        path: '/exercise/:id',
        Component: Exercise
    }

] //everyone