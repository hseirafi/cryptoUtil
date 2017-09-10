export const Right = x => ({
    chain: f => f(x),
    map: f => Right(f(x)),
    fold: (f, g) => g(x),
    inpsect: () => `Right(${x})`
}),
    Left = x => ({
        chain: f => Left(x),
        map: f => Left(x),
        fold: (f, g) => f(x),
        inspect: () => `Left(${x}`
    }),
    fromNullable = x => x != null ? Right(x) : Left(null),
    tryCatch = f => {
        try {
            return Right(f())
        } catch (e) {
            return Left(e)
        }
    },
    // semi groups that are associateve; 
    Sum = x => ({
        x,
        concat: ({ x: y }) => Sum(x + y),
        inspect: () => `Sum(${x})`
    }),
    All = x => ({
        x,
        concat: ({ x: y }) => All(x && y),
        inspect: () => `All(${x})`
    }),
    First = x => ({
        x,
        concat: _ => First(x),
        inspect: () => `First(${x})`
    });

 //monoid are neutrial element; 
Sum.empty = () => Sum(0); 
All.empty = () => All(true);