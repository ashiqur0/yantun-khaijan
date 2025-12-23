import FoodCard from '@/components/cards/FoodCard';
import React from 'react';
import CartItems from './CartItems';
import InputSearch from '@/components/InputSearch';

const getFoods = async (search) => {
    const res = await fetch(`https://taxi-kitchen-api.vercel.app/api/v1/foods/random?search=${search}`);
    const data = await res.json();

    await new Promise((resolve) => setTimeout(resolve, 3000));

    return data.foods || [];
}

const FoodsPage = async ({ searchParams }) => {

    const {search = ''} = await searchParams;
    console.log(data);

    const foods = await getFoods(search);

    return (
        <div>
            <h2 className='text-4xl font-bold'>Total <span className='text-yellow-500'>{foods.length}</span> Foods Found.</h2>

            <div className='my-4'>
                <InputSearch></InputSearch>
            </div>

            <div className='flex gap-5'>
                <div className='grid my-5 grid-cols-1 md:grid-cols-3 gap-5'>
                    {
                        foods.map(food => <FoodCard key={food.id} food={food}></FoodCard>)
                    }
                </div>

                <div className='w-120 border-2 rounded-xl p-4'>
                    <h2 className='text-2xl font-bold border-b'>Cart Items</h2>
                    <CartItems></CartItems>
                </div>
            </div>
        </div>
    );
};

export default FoodsPage;