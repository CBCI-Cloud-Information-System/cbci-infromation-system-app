<?php

namespace App\Http\Controllers\Api;

use App\Models\Member;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class MemberController extends Controller
{
    //
    public function index(){
        $members = Member::all();

        if($members->count() > 0){
            return response()->json([
                'status' => 200,
                'members' => $members
            ], 200);
        }else{
            return response()->json([
                'status' => 404,
                'members' => "No records found"
            ], 404);
        }
    }

    public function addMember(Request $request){
        $validator = Validator::make($request->all(), [
            'first_name' => 'required|string|max:191',
            'last_name' => 'required|string|max:191',
            'phone' => 'required|string|max:191',
            'email' => 'required|string|max:191',
            'network' => 'required|string|max:191'
        ]);

        if($validator->fails()){
            return response()->json([
                'status' => 422,
                'errors' => $validator->messages()
            ], 422);
        }else{
            $member = Member::create([
                'first_name' => $request->first_name,
                'last_name' => $request->last_name,
                'phone' => $request->phone,
                'email' => $request->email,
                'network' => $request->network
            ]);
        }

        if($member){
            return response()->json([
                'status' => 200,
                'message' => "Member Created Success"
            ], 422);
        }else{
            return response()->json([
                'status' => 500,
                'message' => "Creating Member Failed"
            ], 500);
        }
    }

    public function getMember($id){
        $member = Member::find($id);
        if($member){
            return response()->json([
                'status' => 200,
                'members' => $member
            ], 200);
        }else{
            return response()->json([
                'status' => 404,
                'message' => "Member Not Found"
            ], 404);
        }
    }

    public function editMember($id){
        $member = Member::find($id);
        if($member){
            return response()->json([
                'status' => 200,
                'members' => $member
            ], 200);
        }else{
            return response()->json([
                'status' => 404,
                'message' => "Member Not Found"
            ], 404);
        } 
    }

    public function updateMember(Request $request, int $id){
        $validator = Validator::make($request->all(), [
            'first_name' => 'required|string|max:191',
            'last_name' => 'required|string|max:191',
            'phone' => 'required|string|max:191',
            'email' => 'required|string|max:191',
            'network' => 'required|string|max:191'
        ]);

        if($validator->fails()){
            return response()->json([
                'status' => 422,
                'errors' => $validator->messages()
            ], 422);
        }else{
            $member = Member::find($id);
        }

        if($member){
            $member->update([
                'first_name' => $request->first_name,
                'last_name' => $request->last_name,
                'phone' => $request->phone,
                'email' => $request->email,
                'network' => $request->network
            ]);

            return response()->json([
                'status' => 200,
                'message' => "Member Created Success"
            ], 422);
        }else{
            return response()->json([
                'status' => 404,
                'message' => "Member Not Found"
            ], 404);
        }
    }

    public function deleteMember($id){
        $member = Member::find($id);
        if($member){
            $member->delete();
            return response()->json([
                'status' => 200,
                'message' => "Member Deleted Successfully"
            ], 200);
        }else{
            return response()->json([
                'status' => 404,
                'message' => "Member Not Found"
            ], 404);
        } 
    }
}
