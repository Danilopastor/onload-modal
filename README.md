# Onload Modal

This library adds a modal when loading the page, ideal for displaying promotions and other notices to users.

 ## How to use

  adicione a lib no <read></read> da pagina
  ```sh
  <script src="lib/modal.min.js"></script>
  ```
  Or

  ```sh
  <script src="https://cdn.jsdelivr.net/gh/Danilopastor/onload-modal/lib/dist/modal.1.0.min.js"></script>
  ```
  
  then just instantiate the object informed the object you want to transform into modal
 ```sh
   modal({
      target : '.modal'
   })
 ```

  ### There are some methods to use and improve the look of your modal

* **width** - Sets the width of the modal ( __String__ )
* **height** - Sets the height of the modal: ( __String__ )
* **time** - time on screen: ( __Integer__ )
* **rounded** - If it has rounded edges: ( __true | false__ )