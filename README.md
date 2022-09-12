This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

Run the development server:

```bash
npm run dev
```

## How to add new color types...

The Factory Pattern was used to implement the color swatches by adding new classes without changing the existing code, as you can see in the below image.
![image info](/diagrams/uml-diagram.png)

To add more color types follow the next steps:
1. Add the new color type in [types.d.ts](types.d.ts) > `ColorTypes` enum 
2. Export the new color type with the specific properties in [types.d.ts](types.d.ts) and add to `Color` type
3. Create the new Color class in [utils folder](/src/utils/factory)
4. Add the new Color Class in [types.d.ts](/src/utils/factory/types.d.ts) in factory folder to be mapped in the Factory class 
