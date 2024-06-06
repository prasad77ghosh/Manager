<?php

namespace App\Exports;

use App\Models\Project;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithHeadings;

class ProjectExport implements FromCollection, WithHeadings
{
    /**
    * @return \Illuminate\Support\Collection
    */
    public function collection()
    {
        return Project::select('id', 'name', 'due_date', 'status')->get();
    }

    public function headings(): array
    {
        return [
            'ID',
            'Name',
            'DueDate',
            'Status'
        ];
    }
}
