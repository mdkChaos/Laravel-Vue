<?php

namespace App\Http\Controllers;

use App\Http\Requests\Person\StoreRequest;
use App\Http\Requests\Person\UpdateRequest;
use App\Http\Resources\Person\PersonResource;
use App\Models\Person;
use Illuminate\Http\Response;

class PersonController extends Controller
{
    public function index(): mixed
    {
        $people = Person::all();

        return PersonResource::collection($people);
    }

    public function show(Person $person): PersonResource
    {
        return new PersonResource($person);
    }

    public function store(StoreRequest $request): Response
    {
        $data = $request->validated();
        Person::create($data);

        return response([]);
    }

    public function update(UpdateRequest $request, Person $person): Response
    {
        $data = $request->validated();
        $person->update($data);

        return response([]);
    }

    public function delete(Person $person)
    {
        $person->delete();

        return response([]);
    }
}
