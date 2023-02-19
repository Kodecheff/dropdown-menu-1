const dropdowns = document.querySelectorAll('.dropdown')


// Loop through dropdown elements
dropdowns.forEach(dropdown => {
  // Get inner elements for each dropdown
  const select = dropdown.querySelector('.select')
  const caret = dropdown.querySelector('.caret')
  const menu = dropdown.querySelector('.menu')
  const options = dropdown.querySelectorAll('.menu li')
  const selected = dropdown.querySelector('.selected')


  select.addEventListener('click', () => {

    // Add the clicked select styles to the select element
    select.classList.toggle('select-clicked')
    // Add the rotate style to the caret
    caret.classList.toggle('caret-rotate')
    // Add the open style to the menu
    menu.classList.toggle('menu-open')
  })

  // Loop through option elements
  options.forEach(option => {
    option.addEventListener('click', () => {
      selected.innerText = option.innerText

      // Revert to default styles
      select.classList.remove('select-clicked')
      caret.classList.remove('caret-rotate')
      menu.classList.remove('menu-open')

      options.forEach(option => {
        option.classList.remove('active')
      })

      option.classList.add('active')
    })
  })
})