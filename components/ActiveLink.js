import { withRouter } from 'next/router'

const ActiveLink = ({ children, router, href, className, ...otherProps }) => {
    const active = router.pathname === href
    className = typeof className === 'undefined' ? '' : className
    className = active ? className + ' active' : className

  const handleClick = (e) => {
    e.preventDefault()
    router.push(href)
  }

  return (
    <a href={href} onClick={handleClick} className={className} {...otherProps}>
      {children}
    </a>
  )
}

export default withRouter(ActiveLink)