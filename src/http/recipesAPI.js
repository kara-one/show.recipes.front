import { $host } from './index';

export const getAll = async (page, limit) => {
    const { data } = await $host.get('api/recipes', {
        params: {
            page,
            limit,
            sort: 'up'
        },
    });

    return data;
};

export const create = async (recipe) => {
    const { data } = await $host.post('api/recipes', recipe);

    return data;
};

export const update = async (recipe) => {
    const { data } = await $host.put('api/recipes/' + recipe.id, recipe);

    return data;
};

export const remove = async (recipe) => {
    const { data } = await $host.delete('api/recipes/' + recipe.id);

    return data;
};
