

export const Container = ({children}: {children: React.ReactNode}) => {

    return (
        <div style={{flex: 1, border: '1px solid red'}}>
            { children }
        </div>
    )
}