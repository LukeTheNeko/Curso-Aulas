    import pandas as pd
    import matplotlib.pyplot as plt
    import seaborn as sns
    from statsmodels.tsa.statespace.sarimax import SARIMAX

    sales_data = {
        'Data': ['2018-01-01', '2023-12-31'],
        'Quantidade_Vendida': [150, 200],
        'Receita': [3000, 4200],
        'Visitantes_Site': [1200, 1500],
        'Custos_Operacionais': [850, 1000]
    }

    sales_df = pd.DataFrame(sales_data)
    sales_df['Data'] = pd.to_datetime(sales_df['Data'])
    sales_df.set_index('Data', inplace=True)

    sales_df = sales_df.asfreq('M')

    marketing_data = {
        'Data_da_Campanha': ['2018-01-15', '2023-04-30'],
        'Tipo_de_Campanha': ['E-mail', 'PPC'],
        'Custo_da_Campanha': [500, 2000],
        'Receita_Gerada': [7500, 25000],
        'Novos_Clientes': [35, 150]
    }

    marketing_df = pd.DataFrame(marketing_data)
    marketing_df['Data_da_Campanha'] = pd.to_datetime(marketing_df['Data_da_Campanha'])
    marketing_df.set_index('Data_da_Campanha', inplace=True)

    marketing_df['ROI'] = (marketing_df['Receita_Gerada'] - marketing_df['Custo_da_Campanha']) / marketing_df['Custo_da_Campanha']

    fig, axes = plt.subplots(nrows=3, ncols=1, figsize=(12, 18))

    axes[0].plot(sales_df['Quantidade_Vendida'], label='Quantidade Vendida', marker='o')
    axes[0].plot(sales_df['Quantidade_Vendida'].rolling(window=2).mean(), label='Média Móvel (2 meses)', linestyle='--')
    axes[0].set_title('Vendas Mensais e Médias Móveis')
    axes[0].set_xlabel('Data')
    axes[0].set_ylabel('Quantidade Vendida')
    axes[0].legend()

    sales_comparison = sales_df.groupby(sales_df.index.year)['Quantidade_Vendida'].sum()
    axes[1].bar(sales_comparison.index, sales_comparison.values)
    axes[1].set_title('Comparação de Vendas entre Anos')
    axes[1].set_xlabel('Ano')
    axes[1].set_ylabel('Quantidade Vendida')

    order = (1, 0, 1) 
    seasonal_order = (1, 0, 1, 12) 

    model = SARIMAX(sales_df['Quantidade_Vendida'], order=order, seasonal_order=seasonal_order)
    results = model.fit(disp=False)
    forecast = results.get_forecast(steps=12)
    forecast_mean = forecast.predicted_mean

    axes[2].plot(sales_df['Quantidade_Vendida'], label='Histórico de Vendas', marker='o')
    axes[2].plot(forecast_mean.index, forecast_mean.values, label='Previsão de Vendas', linestyle='--')
    axes[2].set_title('Previsão de Vendas com SARIMA')
    axes[2].set_xlabel('Data')
    axes[2].set_ylabel('Quantidade Vendida')
    axes[2].legend()

    plt.tight_layout()
    plt.show()

    average_roi_by_type = marketing_df.groupby('Tipo_de_Campanha')['ROI'].mean()

    plt.figure(figsize=(8, 5))
    sns.barplot(x=average_roi_by_type.index, y=average_roi_by_type.values)
    plt.title('ROI Médio por Tipo de Campanha')
    plt.xlabel('Tipo de Campanha')
    plt.ylabel('ROI Médio')
    plt.show()