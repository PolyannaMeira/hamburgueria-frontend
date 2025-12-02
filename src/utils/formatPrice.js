

export const formatPrice = (value) => {
   
    
        // Accept numbers or strings with comma/point
        const parsed = typeof value === 'string'
            ? Number(value.replace(',', '.'))
            : Number(value);

        if (!Number.isFinite(parsed)) {
            return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(0);
        }

        let cents;
        if (Number.isInteger(parsed)) {
            // Heuristic: integers < 100 are likely reais (e.g., 15 -> R$15,00),
            // integers >= 100 are cents (e.g., 1499 -> R$14,99)
            cents = parsed < 100 ? parsed * 100 : parsed;
        } else {
            // Decimal value given in reais -> convert to cents
            cents = Math.round(parsed * 100);
        }

        return new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
        }).format(cents / 100);
};