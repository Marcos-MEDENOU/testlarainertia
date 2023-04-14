<?php

namespace App\Filament\Resources\CustomerResource\Pages;

use App\Filament\Resources\CustomerResource;
use Filament\Resources\Pages\CreateRecord;

class CreateCustomer extends CreateRecord
{
    
    public static $resource = CustomerResource::class;

    public function rules(){
        return [
            'name' => 'required|min:3|max:255',
            'email' => 'required|',
            // 'phone' => 'required|numeric',
            // Définissez les règles de validation pour les autres champs ici
        ];
    }
   
}
