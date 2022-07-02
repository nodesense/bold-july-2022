V.dom - CREATE ONLY, no UPDATE, no DELETE, no INSERT

Assume a Big table as component 

1000 rows
20 columns 
each column has about 10 dom elements

We need to create 1000 x 20 x 10 V.doms = 200000 v.dom on every time we need data to be changed
These V.doms are java script objects , Garbage collected, must be tracked for cleanup etc 

on every v.dom creation, there is diffing , we compare 200000 objects compared with 200000 objects

and differences are patched, real dom mutation
if no differences, no patching , no real dom mutation

------

Now let us break Table componet into 2 components
   Table component 
   Row componenent

   Each row has 20 x 10 .vdom = 200 v.dom 
   Table has 1000 Row components as children


   if any row /row cell is updated, 
    we only create v.dom for Row component, not for entire table
       200 v.doms are created on every change,
       200 v.doms to be diffed with 200 vdoms


and differences are patched, real dom mutation
if no differences, no patching , no real dom mutation

------