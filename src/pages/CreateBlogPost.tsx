import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { AlertCircle, CheckCircle2, Loader2, X } from "lucide-react"
import type { BlogFormData } from "@/types/blog"
import { useQueryClient, useMutation } from "@tanstack/react-query"
import { addBlog } from "@/api/postBlog"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { useNavigate } from "react-router-dom"

const CATEGORIES = [
    "FINANCE",
    "TECH",
    "CAREER",
    "LIFESTYLE",
    "EDUCATION",
    "REGULATIONS",
]
type SubmitStatusType = "idle" | "loading" | "success" | "error"
function CreateBlogPost() {

    const queryClient = useQueryClient()
    const navigate = useNavigate();
    const [formData, setFormData] = useState<BlogFormData>({
        title: "",
        category: [],
        description: "",
        coverImage: "",
        content: "",
    })
    const [submitStatus, setSubmitStatus] = useState<SubmitStatusType>("idle");
    const [errorMessage, setErrorMessage] = useState<string>("");
    const { mutate, isPending } = useMutation({
        mutationFn: addBlog,
        onMutate: () => {
            setSubmitStatus("loading")
            setErrorMessage("")
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["blogs"] })
            setSubmitStatus("success")
            setFormData({
                title: "",
                category: [],
                description: "",
                coverImage: "",
                content: "",
            })
            setTimeout(() => {
                navigate("/");
            }, 3000)
        },
        onError: (error: any) => {
            setSubmitStatus("error")
            setErrorMessage(error?.message || "Something went wrong")
        },
    })

    const handleClear = () => {
        setFormData({
            title: "",
            category: [],
            description: "",
            coverImage: "",
            content: "",
        })
        setSubmitStatus("idle")
        setErrorMessage("")
    }

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    const handleCategoryAdd = (value: string) => {
        if (!formData.category.includes(value)) {
            setFormData((prev) => ({
                ...prev,
                category: [...prev.category, value],
            }))
        }
    }

    const handleCategoryRemove = (categoryToRemove: string) => {
        setFormData((prev) => ({
            ...prev,
            category: prev.category.filter((cat) => cat !== categoryToRemove),
        }))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        const blogPost = {
            ...formData,
            date: new Date().toISOString(),
        }

        console.log("Blog Post Data:", blogPost)
        mutate(blogPost);
    }

    return (
        <div className="min-h-screen bg-gray-50 p-6">
            <div className="max-w-4xl mx-auto">
                <Card className="bg-white border border-indigo-700">
                    <CardHeader>
                        <CardTitle className="text-2xl font-bold text-indigo-600">
                            Create New Blog Post
                        </CardTitle>
                    </CardHeader>

                    <CardContent>
                        {/* Success Alert */}
                        {submitStatus === "success" && (
                            <Alert className="mb-6 border-green-500 bg-green-50">
                                <CheckCircle2 className="h-4 w-4 text-green-600" />
                                <AlertTitle className="text-green-800">Success!</AlertTitle>
                                <AlertDescription className="text-green-700">
                                    Your blog post has been published successfully.
                                </AlertDescription>
                            </Alert>
                        )}

                        {/* Error Alert */}
                        {submitStatus === "error" && (
                            <Alert className="mb-6 border-red-500 bg-red-50">
                                <AlertCircle className="h-4 w-4 text-red-600" />
                                <AlertTitle className="text-red-800">Error</AlertTitle>
                                <AlertDescription className="text-red-700">
                                    {errorMessage || "Failed to publish blog post. Please try again."}
                                </AlertDescription>
                            </Alert>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Title */}
                            <div className="space-y-2">
                                <Label htmlFor="title" className="text-sm font-medium">
                                    Title
                                </Label>
                                <Input
                                    id="title"
                                    name="title"
                                    value={formData.title}
                                    onChange={handleInputChange}
                                    placeholder="Enter blog title"
                                    className="border-gray-300 focus:border-indigo-600"
                                    disabled={isPending}
                                    required
                                />
                            </div>

                            {/* Category Selection */}
                            <div className="space-y-2">
                                <Label htmlFor="category" className="text-sm font-medium">
                                    Categories
                                </Label>
                                <Select onValueChange={handleCategoryAdd} disabled={submitStatus === "loading"}>
                                    <SelectTrigger className="border-gray-300 focus:border-indigo-600">
                                        <SelectValue placeholder="Select categories" />
                                    </SelectTrigger>
                                    <SelectContent className="bg-white">
                                        {CATEGORIES.map((category) => (
                                            <SelectItem
                                                key={category}
                                                value={category}
                                                disabled={formData.category.includes(category)}
                                            >
                                                {category}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>

                                {/* Selected Categories */}
                                {formData.category.length > 0 && (
                                    <div className="flex flex-wrap gap-2 mt-2">
                                        {formData.category.map((cat) => (
                                            <Badge
                                                key={cat}
                                                variant="secondary"
                                                className="bg-indigo-100 text-indigo-700 hover:bg-indigo-200"
                                            >
                                                {cat}
                                                <button
                                                    type="button"
                                                    onClick={() => handleCategoryRemove(cat)}
                                                    className="ml-2 hover:text-indigo-900"
                                                    disabled={submitStatus === "loading"}
                                                >
                                                    <X className="h-3 w-3" />
                                                </button>
                                            </Badge>
                                        ))}
                                    </div>
                                )}
                            </div>

                            {/* Description */}
                            <div className="space-y-2">
                                <Label htmlFor="description" className="text-sm font-medium">
                                    Description
                                </Label>
                                <Textarea
                                    id="description"
                                    name="description"
                                    value={formData.description}
                                    onChange={handleInputChange}
                                    placeholder="Brief description of the blog post"
                                    rows={3}
                                    className="border-gray-300 focus:border-indigo-600 resize-none"
                                    disabled={submitStatus === "loading"}
                                    required
                                />
                            </div>

                            {/* Cover Image URL */}
                            <div className="space-y-2">
                                <Label htmlFor="coverImage" className="text-sm font-medium">
                                    Cover Image URL
                                </Label>
                                <Input
                                    id="coverImage"
                                    name="coverImage"
                                    type="url"
                                    value={formData.coverImage}
                                    onChange={handleInputChange}
                                    placeholder="https://example.com/image.jpg"
                                    className="border-gray-300 focus:border-indigo-600"
                                    disabled={submitStatus === "loading"}
                                    required
                                />
                                {formData.coverImage && (
                                    <div className="mt-2">
                                        <img
                                            src={formData.coverImage}
                                            alt="Cover preview"
                                            className="w-full h-48 object-cover rounded-lg border"
                                            onError={(e) => {
                                                e.currentTarget.src = ""
                                                e.currentTarget.alt = "Invalid image URL"
                                            }}
                                        />
                                    </div>
                                )}
                            </div>

                            {/* Content */}
                            <div className="space-y-2">
                                <Label htmlFor="content" className="text-sm font-medium">
                                    Content
                                </Label>
                                <Textarea
                                    id="content"
                                    name="content"
                                    value={formData.content}
                                    onChange={handleInputChange}
                                    placeholder="Write your blog content here..."
                                    rows={12}
                                    className="border-gray-300 focus:border-indigo-600 resize-y font-mono text-sm"
                                    disabled={submitStatus === "loading"}
                                    required
                                />
                            </div>

                            {/* Submit Button */}
                            <div className="flex justify-end gap-3 pt-4">
                                <Button
                                    type="button"
                                    variant="outline"
                                    className="border-gray-300"
                                    onClick={handleClear}
                                    disabled={submitStatus === "loading"}
                                >
                                    Clear
                                </Button>
                                <Button
                                    type="submit"
                                    className="bg-indigo-600 hover:bg-indigo-700 text-white"
                                    disabled={submitStatus === "loading"}
                                >
                                    {submitStatus === "loading" ? (
                                        <>
                                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                            Publishing...
                                        </>
                                    ) : (
                                        "Publish Blog"
                                    )}
                                </Button>
                            </div>
                        </form>
                    </CardContent>
                </Card>

                
            </div>
        </div>
    )
}

export default CreateBlogPost