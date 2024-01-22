import React from 'react';
import Header from '../components/header';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <>
    <Header/>
    <Outlet/>
    <footer>footer</footer>
    </>
  )
};
