const NetworkLogo = ({url, networkClass, children}) => {
    return (
        <div className={networkClass}>
            <img src={url} alt="" className="w-full h-full" />
            {children}
        </div>
    )
}

export default NetworkLogo